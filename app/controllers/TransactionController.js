import { getTransaction } from '../utils/horizon';
import { getTransactionFee } from '../utils/stellar';

export async function getTransactionData(req, res) {
  const transactionHash = req.params.transactionHash;
  const transaction = await getTransaction(transactionHash);
  const transactionFee = await getTransactionFee(transactionHash);
  res.render('transaction', { transaction, transactionFee });
}
