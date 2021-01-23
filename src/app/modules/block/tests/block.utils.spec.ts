import { Block, BlockDataAttributes } from '../models/block';
import { StoreDataItem } from '../../store/models/data';
import { getStoreDataItem } from '../../store/tests/store.utils.spec';

export function getMockBlock(): Block {
  const data = getStoreDataItem();

  return new Block(data as StoreDataItem<BlockDataAttributes>);
}
