import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(3000, () => {
  console.log('Revoluterium Block Explorer listening on port 3000');
});
