import { PrismaClient } from '@prisma/client';
import express from 'express';

const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
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
    console.log(response.data.page_size);

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.response.body);
    res.status(400).json(error.response.body);
  }
});

app.post('/update', async (req, res) => {
  const product = await prismaClient.product.findOne({
    where: { id: req.body.id },
  });
  const newCount = product.counter + 1;
  await prismaClient.product.update({
    where: { id: req.body.id },
    data: { counter: newCount },
  });
  res.json({ success: true });
});

app.listen(8000, () => console.log(`Example app listening on port ${8000}!`));
