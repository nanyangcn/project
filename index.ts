import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import axios from 'axios';

const app = express();

app.use(morgan('tiny'));

const PORT = 3001;
const PATH = '/usr/src/app/files/1200.jpg';

const fileExists = async () => {
  try {
    if (!fs.existsSync(PATH)) {
      const response = await axios.get('https://picsum.photos/1200', { responseType: 'stream' });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      response.data.pipe(fs.createWriteStream(PATH));
    }
  } catch (err) {
    console.error(err);
  }
};
  
// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.get('/', async (_req, res) => {
  await fileExists();
  res.sendFile(PATH);
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});