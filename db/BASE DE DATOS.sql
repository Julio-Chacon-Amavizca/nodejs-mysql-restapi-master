CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(11) DEFAULT NULL, 
  PRIMARY KEY(id)
);

DESCRIBE employee;

INSERT INTO employee values 
  (1, 'Ryan Ray', 20000),
  (2, 'Joe McMillan', 40000),
  (3, 'John Carter', 50000);

SELECT * FROM employee;

CREATE TABLE CLIENTE (
  idCliente INT NOT NULL  AUTO_INCREMENT,
  nombre VARCHAR(45),
  email VARCHAR(50),
  contraseña VARCHAR(50),
  telefono VARCHAR(20) DEFAULT NULL,
  rfc VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY(idCliente)
);

INSERT INTO CLIENTE (nombre,email,contraseña,telefono,rfc) VALUES ('TOLOLO','JCHACON@GMAIL.COM','9876','662423105','AAAAAAAAAA');


CREATE TABLE PRODUCTO (
  idProducto INT AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(30),
  descripcion VARCHAR(30),
  distribuidor VARCHAR(20) DEFAULT NULL,
  precio VARCHAR(20) DEFAULT NULL,
  tipo VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY(idProducto)
);
INSERT INTO PRODUCTO VALUES (1,'MOTHERBOARD','MOTHERBOARDFREGONA','HP','4000','MOTHERBOARD');
SELECT * FROM PRODUCTO;
CREATE TABLE PEDIDO (
  idPedido INT ,
  idCliente INT,
  foreign key(idCliente) references CLIENTE (idCliente),
  Primary key(idPedido)
);
INSERT INTO PEDIDO VALUES (1,1);
INSERT INTO PEDIDO VALUES (2,1);
SELECT * FROM PEDIDO;

CREATE TABLE ORDEN (
  idPedidos INT,
  idProducto  INT ,
  precioUnitario int,
  cantidad int,
  monto int,
  fecha date,
  foreign key(idProducto) references PRODUCTO (idProducto),
  foreign key(idPedidos) references PEDIDO(idPedido)
);

INSERT INTO ORDEN VALUES (1,1,4000,2,8000,curdate());
SELECT * FROM ORDEN;

CREATE TABLE ENVIO (
  idEnvio INT NOT NULL AUTO_INCREMENT,
  idCliente INT,
  idPedido INT,
  fecha date,
  estatus VARCHAR(40),
  PRIMARY KEY(idEnvio),
  foreign key(idCliente) references CLIENTE (idCliente)
);

INSERT INTO ENVIO VALUES (1,1,1,curdate(),'PROCESANDO PEDIDO');
SELECT * FROM ENVIO;

CREATE TABLE METODODEPAGO (
  idMPago INT NOT NULL AUTO_INCREMENT,
  idCliente INT,
  ultimoscuatrodigitosT VARCHAR(10),
  fechaVencimiento date,
  cvv INT DEFAULT NULL,
  rfc VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY(idMPago),
  foreign key(idCliente) references CLIENTE (idCliente)
);

INSERT INTO METODODEPAGO VALUES (1,1,1234,'2023-12-21',455,'CAAJ000204DAS');
SELECT * FROM METODODEPAGO;



CREATE TABLE VENTAS (
  idVenta INT NOT NULL AUTO_INCREMENT,
  idMPago INT,
  idPedido INT,
  PRIMARY KEY(idVenta),
  foreign key(idMPago) references METODODEPAGO (idMPago),
  foreign key(idPedido) references PEDIDO (idPedido)
);

INSERT INTO VENTAS VALUES (1,1,1);
SELECT * FROM VENTAS;

CREATE TABLE FACTURAS(
  idFactura INT NOT NULL AUTO_INCREMENT,
  idCliente INT,
  idVenta INT,
  PRIMARY KEY(idFactura),
  foreign key(idCliente) references CLIENTE (idCliente),
  foreign key(idVenta) references VENTAS (idVenta)
);

INSERT INTO FACTURAS VALUES (1,1,1);
SELECT * FROM FACTURAS;
