import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Block, BlockDataAttributes } from '../models/block';
import { StoreDataItem, StoreDataItemType } from '../../store/models/data';
import { StoreService } from '../../store/services/store.service';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {

  constructor(private dataService: StoreService) { }

  all(): Observable<Block[]> {
    return this.dataService.getData<BlockDataAttributes>(StoreDataItemType.Blocks).pipe(
        map((blocks: StoreDataItem<BlockDataAttributes>[]) => {
          return blocks.map((item: StoreDataItem<BlockDataAttributes>) => new Block(item));
        })
    );
  }

  get(id: string): Observable<Block> {
    return this.all().pipe(
      map(blocs => {
        return blocs.find(block => block.id === id);
      })
    );
  }

}
