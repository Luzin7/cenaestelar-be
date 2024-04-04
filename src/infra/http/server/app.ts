import { env } from '@env/index';
import cors from 'cors';
import express from 'express';
import { routes } from '../routes';

const app = express();

app.use(express.json());
app.use(cors()); // CONFIGURAR DEPOIS
app.use(routes);

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
