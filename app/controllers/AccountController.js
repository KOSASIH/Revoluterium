import { getAccount } from '../utils/horizon';
import { getAccountBalance } from '../utils/stellar';

export async function getAccountData(req, res) {
  const accountId = req.params.accountId;
  const account = await getAccount(accountId);
  const accountBalance = await getAccountBalance(accountId);
  res.render('account', { account, accountBalance });
}
