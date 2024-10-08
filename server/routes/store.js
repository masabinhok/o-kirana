const auth = require('../middlewares/auth');
const express = require('express');
const router = express.Router();
const ProductModel = require('../models/product');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${req.user.fullName}-${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get('/', auth, async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send('Error getting products');
  }
});

router.post('/add', auth, upload.single('file'), async (req, res) => {
  try {
    const { name, category, price, quantity, unit } = req.body;
    const { path } = req.file;
    const newProduct = await ProductModel.create({
      name,
      category,
      price,
      quantity,
      unit,
      productImage: path,
    });
    res.send('Product added successfully');
  } catch (error) {
    res.status(400).send('Error uploading file');
  }
});

module.exports = router;
