import axios from 'axios';

const horizonUrl = 'https://horizon-testnet.stellar.org/';

export async function getBlock(blockHash) {
  const response = await axios.get(`${horizonUrl}blocks/${blockHash}`);
  return response.data;
}

export async function getTransaction(transactionHash) {
  const response = await axios.get(`${horizonUrl}transactions/${transactionHash}`);
  return response.data;
}

export async function getAccount(accountId) {
  const response = await axios.get(`${horizonUrl}accounts/${accountId}`);
  return response.data;
}

export async function getLedger(ledgerSeq) {
  const response = await axios.get(`${horizonUrl}ledgers/${ledgerSeq}`);
  return response.data;
}
