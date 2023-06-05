/*
    Autor Olaso Damian
*/
create database TareaObligatoriaUnidad11;
use	TareaObligatoriaUnidad11;
create table usuarios(
id int(11) auto_increment,
nombre varchar(40),
apellido varchar(40),
edad tinyint(2),
fecha timestamp,
provincia varchar(30),
primary key (id)
);
INSERT INTO usuarios (nombre, apellido, edad, fecha, provincia) VALUES
('Juan', 'Pérez', 25, '2023-06-04 10:15:00', 'Buenos Aires'),
('María', 'Gómez', 32, '2023-06-04 11:30:00', 'Córdoba'),
('Carlos', 'López', 40, '2023-06-04 12:45:00', 'Mendoza'),
('Ana', 'Rodríguez', 28, '2023-06-04 14:00:00', 'Santa Fe'),
('Lucía', 'Martínez', 37, '2023-06-04 15:15:00', 'Tucumán');