create table config
(
    id   varchar(100) not null
        primary key,
    data varchar(500) not null
);

create table mus_rols
(
    roleId varchar(100) not null
        primary key
);

create table super_rols
(
    roleId varchar(100) not null
        primary key
);
