create database ab;
use ab;
create table admin_login(id int NOT NULL AUTO_INCREMENT,username varchar(20),pwd varchar(20),PRIMARY KEY(id));
create table Farmer(farmerid int NOT NULL AUTO_INCREMENT,farmername varchar(20),mobileno varchar(10),district varchar(20),area varchar(20),village varchar(30),requireddate varchar(10),machineid varchar(10),rent double,hours double,totalrent double,PRIMARY KEY(farmerid));
create table Fertilizer(shopid int NOT NULL AUTO_INCREMENT,areas varchar(30),shopname varchar(50),date varchar(10),availableproducts varchar(10000),contact varchar(10),PRIMARY KEY(shopid));
create table Machinery(machineid int NOT NULL AUTO_INCREMENT,holder varchar(20),machine varchar(50),rent double,phoneno varchar(10),PRIMARY KEY(machineid));
drop table Fertilizer;
drop table admin_login;
insert into admin_login(username,pwd) values('Soundharya','Sound123');
select * from admin_login;
select * from Fertilizer;
select * from farmer;
select * from Machinery;

select * from admin_login;
select * from farmer where machineid=3;
INSERT INTO Machinery(machine) VALUES(LOAD_FILE('C:\Users\SOUNDHARYA RAMASAMY\OneDrive\Desktop\combineharvester.jpg') ) where machineid=1;
