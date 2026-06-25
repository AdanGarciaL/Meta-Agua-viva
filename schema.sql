-- Database Schema for Agua Viva Assistance & Logistics Platform
-- Dialect: PostgreSQL (15+)
-- Description: Designed for mobile and web synchronization, managing roles, calendars, regional logistics, and POA tracking.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ====================================================================
-- 1. REGIONS & GROUPS DOMAIN
-- ====================================================================

CREATE TABLE regions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE groups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    region_id UUID NOT NULL REFERENCES regions(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_region_group_name UNIQUE (region_id, name)
);

-- ====================================================================
-- 2. USERS & ROLES
-- ====================================================================

-- Enum types for distinct roles and statuses
CREATE TYPE user_role_enum AS ENUM ('SUPERADMIN', 'LIDER', 'AE', 'AI', 'MEMBER');
CREATE TYPE oyp_status_enum AS ENUM ('NONE', 'APOYO', 'OREJA', 'PADRINO');
CREATE TYPE servidor_status_enum AS ENUM ('NONE', 'SERV_NORMAL', 'SERV_JAV');

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name_initial CHAR(1) NOT NULL,
    birth_date DATE NOT NULL,
    phone VARCHAR(20) NOT NULL, -- Cellphone number (restricted visibility)
    sobriety_date DATE,         -- Start of sobriety path (clean days)
    region_id UUID REFERENCES regions(id) ON DELETE SET NULL,
    group_id UUID REFERENCES groups(id) ON DELETE SET NULL,
    
    -- JAV status: Boolean indicating if member belongs to Jóvenes en Agua Viva.
    -- Can be automatically updated by a trigger based on age, or overridden.
    is_jav BOOLEAN DEFAULT FALSE,
    
    -- Main authorization role
    role user_role_enum NOT NULL DEFAULT 'MEMBER',
    is_approved_leader BOOLEAN NOT NULL DEFAULT FALSE, -- Approved by Superadmin
    leader_approved_by UUID REFERENCES users(id),
    leader_approved_at TIMESTAMP WITH TIME ZONE,
    
    -- Orejas & Padrinos status
    oyp_status oyp_status_enum NOT NULL DEFAULT 'NONE',
    is_approved_oyp BOOLEAN NOT NULL DEFAULT FALSE, -- Approved by Superadmin/Admin (Leader/AE/AI)
    oyp_approved_by UUID REFERENCES users(id),
    oyp_approved_at TIMESTAMP WITH TIME ZONE,
    
    -- Servidor status and role
    servidor_status servidor_status_enum NOT NULL DEFAULT 'NONE',
    servidor_role VARCHAR(100), -- Specific role (e.g., 'COM', 'MANAGER', 'TESORERIA_GRUPO', etc.)
    is_approved_servidor BOOLEAN NOT NULL DEFAULT FALSE, -- Approved by Superadmin/Admin
    servidor_approved_by UUID REFERENCES users(id),
    servidor_approved_at TIMESTAMP WITH TIME ZONE,

    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexing for lookup speed in search/filtering
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_region_group ON users(region_id, group_id);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_is_jav ON users(is_jav);

-- ====================================================================
-- 3. CALENDARS & MEETINGS
-- ====================================================================

CREATE TYPE meeting_type_enum AS ENUM (
    'NORMAL',
    'INICIANDO_EL_CAMINO',
    'POST_MORTEM',
    'CONSAGRACION',
    'OYP',
    'TRIBUNA',
    'CIRCULO_RECUPERACION',
    'TALLERES',
    'PREPARACION',
    'NOCHES_DE_GUERRA',
    'PREPARACIONES_JAV',
    'OYP_JAV',
    'PADRES_JAV',
    'JUNTAS_JAV'
);

CREATE TYPE calendar_scope_enum AS ENUM ('GROUP', 'REGIONAL', 'ANNUAL');

CREATE TABLE meetings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    scope calendar_scope_enum NOT NULL,
    
    -- Context fields depending on scope
    group_id UUID REFERENCES groups(id) ON DELETE CASCADE,   -- Required if scope is GROUP
    region_id UUID REFERENCES regions(id) ON DELETE CASCADE, -- Required if scope is REGIONAL
    
    meeting_type meeting_type_enum NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    
    -- Meeting specific details
    theme VARCHAR(200),     -- Required if meeting_type = 'NORMAL'
    ponente VARCHAR(150),   -- Speaker, Required if meeting_type = 'NORMAL'
    
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraint to validate scopes and time ranges
    CONSTRAINT check_meeting_times CHECK (start_time < end_time),
    CONSTRAINT check_group_context CHECK (
        (scope = 'GROUP' AND group_id IS NOT NULL) OR 
        (scope != 'GROUP')
    ),
    CONSTRAINT check_region_context CHECK (
        (scope = 'REGIONAL' AND region_id IS NOT NULL) OR 
        (scope != 'REGIONAL')
    )
);

CREATE INDEX idx_meetings_scope_date ON meetings(scope, start_time);
CREATE INDEX idx_meetings_group ON meetings(group_id) WHERE group_id IS NOT NULL;
CREATE INDEX idx_meetings_region ON meetings(region_id) WHERE region_id IS NOT NULL;

-- Meeting Attendance table
CREATE TABLE meeting_attendance (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meeting_id UUID NOT NULL REFERENCES meetings(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    attended BOOLEAN NOT NULL DEFAULT FALSE,
    registered_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(meeting_id, user_id)
);

-- ====================================================================
-- 4. REGIONAL EVENTS (CONCORDIA, JH, ATRACCIONES, ETC.)
-- ====================================================================

CREATE TYPE regional_event_type_enum AS ENUM (
    'JH',                  -- Junta de Hacienda
    'CONCORDIA',
    'ATRACCIONES',
    'LIDERES_MANAGERS',
    'COMS',
    'NOCHE_GUERRA_REGIONAL',
    'CUSTOM'
);

CREATE TABLE regional_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type regional_event_type_enum NOT NULL,
    scope calendar_scope_enum NOT NULL DEFAULT 'REGIONAL',
    region_id UUID REFERENCES regions(id) ON DELETE CASCADE, -- NULL if ANNUAL
    
    title VARCHAR(150) NOT NULL,
    description TEXT,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT check_event_times CHECK (start_time < end_time),
    CONSTRAINT check_event_region CHECK (
        (scope = 'REGIONAL' AND region_id IS NOT NULL) OR
        (scope = 'ANNUAL' AND region_id IS NULL)
    )
);

CREATE INDEX idx_regional_events_date ON regional_events(start_time);

-- ====================================================================
-- 5. HACIENDAS & POA LOGISTICS
-- ====================================================================

-- Represents a Hacienda event (major logistics event held per region)
CREATE TABLE haciendas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    region_id UUID NOT NULL REFERENCES regions(id) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT check_hacienda_dates CHECK (start_date <= end_date)
);

-- Enum for shifts when members arrive at the Hacienda
CREATE TYPE hacienda_shift_enum AS ENUM (
    'PRE_AVANZADA',       -- Thursday
    'AVANZADA',           -- Friday morning (with writers/escribientes)
    'VIERNES_TARDE_NOCHE',-- Friday afternoon/night
    'SABADO_MANANA',       -- Saturday morning
    'SABADO_TARDE_NOCHE', -- Saturday afternoon/night
    'DOMINGO'             -- Sunday
);

CREATE TYPE transport_status_enum AS ENUM (
    'PROVIDES_TRANSPORT',
    'NEEDS_TRANSPORT',
    'NONE'
);

-- Attendance and logistics declarations for members (Padrinos, Orejas, Apoyos, JAVs)
CREATE TABLE hacienda_attendance (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hacienda_id UUID NOT NULL REFERENCES haciendas(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    attending BOOLEAN NOT NULL DEFAULT FALSE,
    arrival_shift hacienda_shift_enum,
    
    -- Transport logistics
    transport_status transport_status_enum NOT NULL DEFAULT 'NONE',
    transport_capacity INTEGER DEFAULT 0, -- If PROVIDES_TRANSPORT, how many spots available
    transport_notes TEXT,                 -- Pick-up point, route details, etc.
    
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(hacienda_id, user_id)
);

CREATE INDEX idx_hacienda_attendance_logistics ON hacienda_attendance(hacienda_id, attending);

-- Escribientes (First-time attendees to live the experience)
CREATE TYPE gender_enum AS ENUM ('MALE', 'FEMALE');

CREATE TABLE hacienda_escribientes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hacienda_id UUID NOT NULL REFERENCES haciendas(id) ON DELETE CASCADE,
    group_id UUID NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
    
    first_name VARCHAR(100) NOT NULL,
    last_name_initial CHAR(1) NOT NULL,
    gender gender_enum NOT NULL,
    
    created_by UUID REFERENCES users(id) ON DELETE SET NULL, -- Leader or Atracciones
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_escribientes_hacienda_group ON hacienda_escribientes(hacienda_id, group_id);

-- Group status (Traffic Light / Semáforo System) for a Hacienda event
CREATE TYPE semaforo_status_enum AS ENUM ('RED', 'YELLOW', 'GREEN');

CREATE TABLE hacienda_group_status (
    hacienda_id UUID NOT NULL REFERENCES haciendas(id) ON DELETE CASCADE,
    group_id UUID NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
    
    status semaforo_status_enum NOT NULL DEFAULT 'RED',
    last_updated_by UUID REFERENCES users(id) ON DELETE SET NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (hacienda_id, group_id)
);

-- Specific transport assignment mapping (connecting drivers with passengers)
CREATE TABLE hacienda_transport_assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hacienda_id UUID NOT NULL REFERENCES haciendas(id) ON DELETE CASCADE,
    driver_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE, -- Must be provider in attendance
    
    -- A passenger is either a registered user OR an escribiente
    passenger_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    passenger_escribiente_id UUID REFERENCES hacienda_escribientes(id) ON DELETE CASCADE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Ensure passengers are distinct and mutually exclusive
    CONSTRAINT check_mutually_exclusive_passenger CHECK (
        (passenger_user_id IS NOT NULL AND passenger_escribiente_id IS NULL) OR
        (passenger_user_id IS NULL AND passenger_escribiente_id IS NOT NULL)
    ),
    CONSTRAINT unique_passenger_user UNIQUE(hacienda_id, passenger_user_id),
    CONSTRAINT unique_passenger_escribiente UNIQUE(hacienda_id, passenger_escribiente_id)
);

-- ====================================================================
-- 6. AUDIT TRAILS & LOGGING (REGISTRO DE CAMBIOS)
-- ====================================================================

CREATE TABLE hacienda_change_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hacienda_id UUID REFERENCES haciendas(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL, -- Who made the change
    action VARCHAR(100) NOT NULL, -- e.g., 'CREATE_ESCRIBIENTE', 'UPDATE_SEMAFORO', 'UPDATE_TRANSPORT'
    target_table VARCHAR(50) NOT NULL, -- e.g., 'hacienda_escribientes'
    record_id UUID NOT NULL,
    old_data JSONB,
    new_data JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_change_logs_hacienda ON hacienda_change_logs(hacienda_id, created_at);

-- ====================================================================
-- 7. TRIGGERS & AUTOMATIONS
-- ====================================================================

-- Trigger: Automatically update is_jav based on age (birth_date) at insert/update
CREATE OR REPLACE FUNCTION set_user_jav_status()
RETURNS TRIGGER AS $$
BEGIN
    -- JAV if age is between 13 and 18 years old
    IF EXTRACT(YEAR FROM AGE(NEW.birth_date)) >= 13 AND EXTRACT(YEAR FROM AGE(NEW.birth_date)) <= 18 THEN
        NEW.is_jav := TRUE;
    ELSE
        NEW.is_jav := FALSE;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_set_user_jav
BEFORE INSERT OR UPDATE OF birth_date ON users
FOR EACH ROW
EXECUTE FUNCTION set_user_jav_status();

-- Trigger: Update updated_at fields
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_regions_timestamp BEFORE UPDATE ON regions FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER trg_update_groups_timestamp BEFORE UPDATE ON groups FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER trg_update_users_timestamp BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER trg_update_meetings_timestamp BEFORE UPDATE ON meetings FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER trg_update_haciendas_timestamp BEFORE UPDATE ON haciendas FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER trg_update_escribientes_timestamp BEFORE UPDATE ON hacienda_escribientes FOR EACH ROW EXECUTE FUNCTION update_modified_column();
