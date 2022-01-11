CREATE TABLE users (
    "id" SERIAL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pass" TEXT NOT NULL,
    "administrator" boolean
    );

INSERT INTO users (first_name, last_name, email, pass, administrator)
VALUES
    ('Kevin', 'Monsieur', 'kevin.monsieur01@gmail.com', '&Y!m95', false),
    ('Martin', 'Neyns', 'martin.neyns.pro@gmail.com', '^22Wwv', false),
    ('Léon', 'Fashingabo', 'fashingaboleon@gmail.com', 'dP4%-N', false),
    ('Mohammad', 'Azad', 'mohammadazad.bc@gmail.com', ':tA5HL', false),
    ('Hanna', 'Masanjika', 'hanna.masanjika@gmail.com', '&Wz5=3', false),
    ('Victor', 'Tardif', 'victor.tardif1gmail.com', '?Gek9g', false),
    ('Esteban', 'Veraart', 'esteban.veraart@gmail.com', 'P.Mr9{', false),
    ('Youssef', 'Akanni', 'youssefakanni2003@gmail.com', 'dA6wm', false),
    ('Shanon', 'Richet', 'shanon.richet@gmail.com', 'm;Pf4p', true),
    ('Axel', 'Tavormina', 'tavormina.axel@gmail.com', '=*Uw6,', false),
    ('Dylan', 'Richardson', 'dylanrichardson1606@gmail.com', '7FJ+b{', false),
    ('Aubry', 'Franquinet', 'aubry.franquinet@hotmail.com', 'Yz9^bt', false),
    ('Kelian', 'Christophe', 'kelian.christophe@becode.org', 'y`7Ck,', false),
    ('Michel', 'Plainchamp', 'michel.plainchamp@becode.org', '`T7Pzk', false)
    ;





CREATE TABLE products
    (id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    price INTEGER NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    imageURL TEXT NOT NULL,
    rate INTEGER NOT NULL,
    stock INTEGER NOT NULL)
    ;

INSERT INTO products (title, price, description, category, imageURL, rate, stock)
VALUES
    ('Mens Casual Premium Slim Fit T-Shirts', 22.3, 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.', 'men s clothing', 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', 4.1, 259),
    ('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', 109.95, 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', 'men s clothing', 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', 3.9, 120),
    ('Mens Cotton Jacket', 55.99, 'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.', 'men s clothing', 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', 4.7, 500),
    ('Mens Casual Slim Fit', 15.99, 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.', 'men s clothing', 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg', 2.1, 430),
    ('John Hardy Women s Legends Naga Gold & Silver Dragon Station Chain Bracelet', 695, 'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.', 'jewelery', 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg', 4.6, 400),
    ('Solid Gold Petite Micropave', 168, 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.', 'jewelery', 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg', 3.9, 70),
    ('White Gold Plated Princess', 9.99, 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine`s Day...', 'jewelery', 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg', 3, 400),
    ('Pierced Owl Rose Gold Plated Stainless Steel Double', 10.99, 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel', 'jewelery', 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg', 1.9, 100)
;

CREATE TABLE card (
    imageURL TEXT NOT NULL,
    price INTEGER NOT NULL
);

INSERT INTO card (title, price, count, total)
VALUES
    ('Mens Cotton Jacket', 55.99, 2, 111.98),
    ('White Gold Plated Princess', 9.99, 1, 9.99)
;