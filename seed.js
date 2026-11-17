require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product');

const data = [
  { name: 'Study Table', sku: 'FURN-TB-812', category: 'Furniture', price: 3999, quantity: 2, reorderLevel: 4, supplier: 'IKEA India' },
  { name: 'Office Chair', sku: 'FURN-CH-101', category: 'Furniture', price: 5499, quantity: 15, reorderLevel: 5, supplier: 'Godrej' },
  { name: 'Laptop 15"', sku: 'ELEC-LP-201', category: 'Electronics', price: 54999, quantity: 3, reorderLevel: 5, supplier: 'HP' },
  { name: 'Wireless Mouse', sku: 'ELEC-MS-202', category: 'Electronics', price: 799, quantity: 40, reorderLevel: 10, supplier: 'Logitech' },
  { name: 'Cotton T-Shirt', sku: 'APPL-TS-301', category: 'Apparel', price: 499, quantity: 50, reorderLevel: 15, supplier: 'Bewakoof' },
  { name: 'Denim Jacket', sku: 'APPL-JK-302', category: 'Apparel', price: 2299, quantity: 6, reorderLevel: 8, supplier: 'Levis' },
  { name: 'Gel Pen Pack of 15', sku: 'STNY-PN-713', category: 'Stationery', price: 120, quantity: 40, reorderLevel: 20, supplier: 'Cello Pens' },
  { name: 'A4 Notebook', sku: 'STNY-NB-714', category: 'Stationery', price: 60, quantity: 8, reorderLevel: 20, supplier: 'Classmate' },
];

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany();
  await Product.insertMany(data);
  console.log('Seeded', data.length, 'products');
  process.exit();
})();