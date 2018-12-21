create table houses (
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
)


insert into houses(id, name, address, city, state, zip, img, mortgage, rent)
value
(
1, 'John', '1234 House Rd', 'Provo', 'UT', 12345, 'img', 1000.0, 200.0
)
(
2, 'Betty', '3456 Home Rd', 'Salt Lake City', 'UT', 67891, 'img', 10000.00, 200
),
(
3, 'Todd', '3698 DevMountain Rd', 'Provo', 'UT', 53252, 'img', 10000.00, 200
),
(
4, 'Carter', '6456 Mentor Rd', 'SF', 'CA', 12345, 'img', 10000.00, 200
),
(
5, 'Jimmy', '4325 Random Rd', 'SJ', 'CA', 52353, 'img', 10000.00, 200
) 
 
