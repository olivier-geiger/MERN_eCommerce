import asyncHandler from 'express-async-handler';

import Product from '../models/productModel.js';

// @desc     Fetch all products
// @route    Get /api/v1/products
// @access   Public
const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const products = await Product.find({ ...keyword });

  if (products) {
    res.send(products);
  } else {
    res.status(404);
    throw new Error('Products not found!');
  }
});

// @desc     Fetch single product
// @route    Get /api/v1/products/:id
// @access   Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found!');
  }
});

// @desc     Get to rated products
// @route    Get /api/v1/products/top
// @access   Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
});

export { getProducts, getProductById, getTopProducts };
