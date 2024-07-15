import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import { config } from './config';

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());

app.get('/', (req, res) => {
  res.render('index', { title: 'Revoluterium Block Explorer' });
});

app.get('/block/:blockHash', (req, res) => {
  const blockHash = req.params.blockHash;
  // Call Horizon API to get block data
  fetch(`${config.horizonUrl}blocks/${blockHash}`)
    .then(response => response.json())
    .then(data => res.render('block', { block: data }));
});

app.get('/transaction/:transactionHash', (req, res) => {
  const transactionHash = req.params.transactionHash;
  // Call Horizon API to get transaction data
  fetch(`${config.horizonUrl}transactions/${transactionHash}`)
    .then(response => response.json())
    .then(data => res.render('transaction', { transaction: data }));
});

app.listen(3000, () => {
  console.log('Revoluterium Block Explorer listening on port 3000');
});
