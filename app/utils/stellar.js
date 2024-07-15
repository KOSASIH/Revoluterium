import { StellarSDK } from 'tellar-sdk';

const stellar = new StellarSDK();

export async function getAccountBalance(accountId) {
  const account = await stellar.accounts.getAccount(accountId);
  return account.balances;
}

export async function getTransactionFee(transactionHash) {
  const transaction = await stellar.transactions.getTransaction(transactionHash);
  return transaction.fee;
}

export async function getBlockTime(blockHash) {
  const block = await stellar.blocks.getBlock(blockHash);
  return block.timestamp;
}
