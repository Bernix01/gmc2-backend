import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const prismaClient = new PrismaClient();

app.get('/users', async (req, res) => {
  const users = await prismaClient.user.findMany();
  res.json(users);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
