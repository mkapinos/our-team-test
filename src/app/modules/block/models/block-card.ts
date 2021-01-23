import { Image, ImageThumbSize } from '../../image/models/image';

export interface BlockDataCard {
  imageUrl: BlockDataCardImageUrls;
  block: {
    title: string;
    description: string;
    link: string;
    text: string;
  };
}

export interface BlockDataCardImageUrls {
  [size: string]: string;
}

export class BlockCard {

  get title(): string {
    return this.data.block?.title;
  }

  get description(): string {
    return this.data.block?.description;
  }

  get link(): string {
    return this.data.block?.link;
  }

  get text(): string {
    return this.data.block?.text;
  }

  public readonly image: Image;

  constructor(public readonly id: string, private data: BlockDataCard
  ) {
    if (!data) {
      throw new Error('Wrong data configuration');
    }
    this.image = new Image(data.block.title, createImageThumbsMap(data.imageUrl));
  }

}

function createImageThumbsMap(imageUrls: BlockDataCardImageUrls): Map<ImageThumbSize, string> {
  const thumbsMap = new Map();
  Object.keys(imageUrls).forEach(size => {
    // TODO check size
    thumbsMap.set(size as ImageThumbSize, imageUrls[size]);
  });
  return thumbsMap;
}
