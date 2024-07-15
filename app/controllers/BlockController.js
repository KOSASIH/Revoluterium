import { getBlock } from '../utils/horizon';
import { getBlockTime } from '../utils/stellar';

export async function getBlockData(req, res) {
  const blockHash = req.params.blockHash;
  const block = await getBlock(blockHash);
  const blockTime = await getBlockTime(blockHash);
  res.render('block', { block, blockTime });
}
