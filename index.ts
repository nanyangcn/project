import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import axios from 'axios';

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static('./client/build'));

const PORT = 3001;
const PATH = '/usr/src/app/files/1200.jpg';
  
app.get('/picture', (_req, res) => {
  const sendPicture = async () => {
    if (!fs.existsSync(PATH)) {
      const response = await axios.get<NodeJS.ReadWriteStream>('https://picsum.photos/1200', { responseType: 'stream' });
      const stream: fs.WriteStream = response.data.pipe(fs.createWriteStream(PATH));
      stream.on('finish', () => res.sendFile(PATH));
    } else {
      res.sendFile(PATH);
    }
  };
  void sendPicture();
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});