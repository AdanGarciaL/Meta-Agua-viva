-- Seed Data for Agua Viva Regions and Groups
-- Run this after running schema.sql to populate regions and groups as requested.

-- ====================================================================
-- 1. INSERT REGIONS
-- ====================================================================

INSERT INTO regions (name) VALUES
('Región 1 CDMX'),
('Región 2 Estado de México'),
('Región 3 Querétaro y Guanajuato'),
('Región 4 Puebla'),
('Región 5 Guerrero'),
('Región 6 Yucatán'),
('Región 7 Chicago'),
('Región 8 Veracruz'),
('Región 9 Monterrey')
ON CONFLICT (name) DO NOTHING;

-- ====================================================================
-- 2. INSERT GROUPS BY REGION
-- ====================================================================

-- Región 1 CDMX Groups
INSERT INTO groups (region_id, name)
SELECT id, name_val FROM regions, (VALUES 
    ('Zaragoza'), ('Sur'), ('Satélite'), ('Chicoloapan'), 
    ('San Cosme'), ('Cuernavaca'), ('Neza'), ('San Cristóbal'), 
    ('Ermita'), ('Santa María'), ('Jiutepec'), ('Zacatepec'), 
    ('Mirador'), ('Aragón'), ('Alamedas'), ('Coapan')
) AS grp(name_val)
WHERE regions.name = 'Región 1 CDMX'
ON CONFLICT (region_id, name) DO NOTHING;

-- Región 2 Estado de México Groups
INSERT INTO groups (region_id, name)
SELECT id, name_val FROM regions, (VALUES 
    ('Teoloyucan'), ('Tlanepantla'), ('Pachuca'), ('Caracoles'), 
    ('Atizapán'), ('Nextlalpan'), ('Coacalco'), ('Atlacomulco'), 
    ('Tizayuca'), ('Cuautitlán'), ('Nicolás Romero')
) AS grp(name_val)
WHERE regions.name = 'Región 2 Estado de México'
ON CONFLICT (region_id, name) DO NOTHING;

-- Región 3 Querétaro y Guanajuato Groups
INSERT INTO groups (region_id, name)
SELECT id, name_val FROM regions, (VALUES 
    ('Satélite'), ('Salitre'), ('León')
) AS grp(name_val)
WHERE regions.name = 'Región 3 Querétaro y Guanajuato'
ON CONFLICT (region_id, name) DO NOTHING;

-- Región 4 Puebla Groups
INSERT INTO groups (region_id, name)
SELECT id, name_val FROM regions, (VALUES 
    ('Apizaco'), ('Guadalupe Hidalgo (Pipis)'), ('San Felipe'), ('Tlaxcala'), 
    ('Cholula'), ('Zacatelco'), ('Buenavista'), ('San Baltazar'), 
    ('Amalucan'), ('Amozoc'), ('Huamantla'), ('Contla')
) AS grp(name_val)
WHERE regions.name = 'Región 4 Puebla'
ON CONFLICT (region_id, name) DO NOTHING;

-- Región 5 Guerrero Groups
INSERT INTO groups (region_id, name)
SELECT id, name_val FROM regions, (VALUES 
    ('Chilpancingo'), ('Coloso'), ('Mozimba'), ('San Jerónimo'), 
    ('Acahuizotla'), ('Hacienda de Cabañas'), ('Coyuca'), ('Atoyac'), 
    ('Chichihualco')
) AS grp(name_val)
WHERE regions.name = 'Región 5 Guerrero'
ON CONFLICT (region_id, name) DO NOTHING;

-- Región 6 Yucatán Groups
INSERT INTO groups (region_id, name)
SELECT id, name_val FROM regions, (VALUES 
    ('Cancún'), ('Caribe'), ('Mérida'), ('Hunucmá'), ('Conkal')
) AS grp(name_val)
WHERE regions.name = 'Región 6 Yucatán'
ON CONFLICT (region_id, name) DO NOTHING;

-- Región 7 Chicago Groups
INSERT INTO groups (region_id, name)
SELECT id, name_val FROM regions, (VALUES 
    ('Aurora'), ('Minoora'), ('Chicago')
) AS grp(name_val)
WHERE regions.name = 'Región 7 Chicago'
ON CONFLICT (region_id, name) DO NOTHING;

-- Región 8 Veracruz Groups
INSERT INTO groups (region_id, name)
SELECT id, name_val FROM regions, (VALUES 
    ('Cuitláhuac'), ('Tinaja'), ('Tierra Blanca'), ('Capilla'), 
    ('Carranza'), ('Amapolas'), ('Córdoba')
) AS grp(name_val)
WHERE regions.name = 'Región 8 Veracruz'
ON CONFLICT (region_id, name) DO NOTHING;

-- Región 9 Monterrey Groups
INSERT INTO groups (region_id, name)
SELECT id, name_val FROM regions, (VALUES 
    ('Monterrey')
) AS grp(name_val)
WHERE regions.name = 'Región 9 Monterrey'
ON CONFLICT (region_id, name) DO NOTHING;
