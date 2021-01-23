import { BlockCard, BlockDataCard } from './block-card';
import { DataItem } from '../../common/models/data';

export interface BlockDataAttributes {
  title: string;
  memberCards: {
    [key: string]: BlockDataCard;
  };
}

export class Block {

  get id(): string {
    return this.data.id;
  }

  get title(): string {
    return this.data.attributes.title;
  }

  get cards(): BlockCard[] {
    return this.cardsCache;
  }

  private readonly cardsCache: BlockCard[];

  constructor(private data: DataItem<BlockDataAttributes>) {
    this.cardsCache = mapToCards(data.attributes.memberCards);
  }
}

function mapToCards(memberCards: {[key: string]: BlockDataCard}): BlockCard[] {
  const cards: BlockCard[] = [];
  Object.keys(memberCards).forEach(key => {
    cards.push(new BlockCard(key, memberCards[key]));
  });
  return cards;
}
