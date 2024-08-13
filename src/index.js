const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/products', async (_req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.post('/products', async (req, res) => {
  const { name, description, price } = req.body;
  const product = await prisma.product.create({
    data: { name, description, price },
  });
  res.status(201).json(product);
});
