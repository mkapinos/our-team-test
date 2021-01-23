export interface StoreData<T> {
  data: StoreDataItem<T>[];
}

export enum StoreDataItemType {
  Blocks = 'blocks'
}

export interface StoreDataItem<T> {
  id: string;
  type: StoreDataItemType;
  attributes: T;
}
