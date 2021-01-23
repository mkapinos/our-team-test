export interface Data<T> {
  data: DataItem<T>[];
}

export enum DataItemType {
  Blocks = 'blocks'
}

export interface DataItem<T> {
  id: string;
  type: DataItemType;
  attributes: T;
};

export interface DataItemBlock extends DataItemAbstract<DataItemBlockAttributes> {
}

interface DataItemBlockAttributes {
  title: string;
  memberCards: {
    [key: string]: DataItemBlockAttributesMemberCard;
  };
}

interface DataItemBlockAttributesMemberCard {
  imageUrl: ImageUrls;
  block: DataItemBlockAttributesData;
}

interface DataItemBlockAttributesData {
  title: string;
  description: string;
  link: string;
  text: string;
}

interface DataItemAbstract<T> {
  id: string;
  type: DataItemType;
  attributes: T;
}



interface ImageUrls {
  [size: string]: string;
}
