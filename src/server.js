import { PrismaClient } from '@prisma/client';
import express from 'express';
const axios = require('axios');

const app = express();
const prismaClient = new PrismaClient();

app.get('/users', async (req, res) => {
  const users = await prismaClient.user.findMany();
  res.json(users);
});

app.get('/products/:country', async (req, res) => {
  try {
    const response = await axios.get(
      `https://world.openfoodfacts.org/country/${req.params.country}.json`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.response.body);
    res.status(400).json(error.response.body);
  }
});

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`));
