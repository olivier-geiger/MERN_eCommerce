// dépendances
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

// variables
const app = express();

// middlewares
app.use(express.json());

// import
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// connexion
dotenv.config();
import connectDB from './config/db.js';
connectDB();

// middlewares
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('This is from backend!');
});

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users/', userRoutes);

app.use(notFound);
app.use(errorHandler);

// serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold,
  ),
);
