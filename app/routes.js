import express from 'express';
import { BlockController } from './controllers/BlockController';
import { TransactionController } from './controllers/TransactionController';
import { AccountController } from './controllers/AccountController';

const router = express.Router();

router.get('/block/:blockHash', BlockController.getBlockData);
router.get('/transaction/:transactionHash', TransactionController.getTransactionData);
router.get('/account/:accountId', AccountController.getAccountData);

export default router;
