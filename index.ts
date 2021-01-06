import express from 'express';

const app = express();

const PORT = 3001;

app.get('/', (_req, res) => {
  res.send('Get /');
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});