import fs from 'fs';
import axios from 'axios';
import { useEffect } from 'react';

const Picture: React.FC = () => {
  const PATH = 'D:/1200.jpg';
  useEffect(() => {
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
    fileExists();
  });
  
  return (
    <div>
      <img src={PATH} width='600'/>
    </div>
  )
}

export default Picture;