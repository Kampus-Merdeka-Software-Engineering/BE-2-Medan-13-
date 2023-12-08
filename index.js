const express = require('express');
const bodyParser = require('body-parser');
require ('dotenv').config();
<<<<<<< HEAD
=======

/*const { Sequelize } = require('sequelize');
const sequelize = require('./src/config/db_config.js');
const auth = require('./src/routes/authRoutes.js');
const router = require('./src/routes/authRoutes.js');
const bodyParser = require('body-parser');
const multer = require('multer');
require('dotenv').config();*/
>>>>>>> d8d29a6d707f0647e45210d11a59ed9e86073beb


const app = express();
const hotelRoutes = require('./src/routes/hotel-routes.js')
const destinasiRoutes = require('./src/routes/dest-routes.js')

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 100000, limit:"500mb" }));
app.use(express.static('images'));
/*
// Setel EJS sebagai mesin templat
app.set('view engine', 'ejs');

// Tentukan lokasi folder views
app.set('view', path.join(__dirname, './src/view'));

app.use('/api', postRoutes);
*/
app.use('/',hotelRoutes);
app.use('/',destinasiRoutes);

app.listen(process.env.PORT, () =>{
  console.log('connection')
})