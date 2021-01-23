import { Injectable } from '@angular/core';
import { DataService } from '../../common/services/data.service';
import { Observable } from 'rxjs';
import { BlockCard } from '../models/block-card';
import { map } from 'rxjs/operators';
import { DataItem, DataItemType } from '../../common/models/data';
import { Block, BlockDataAttributes } from '../models/block';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {

  constructor(private dataService: DataService) { }

  all(): Observable<Block[]> {
    return this.dataService.getData<BlockDataAttributes>(DataItemType.Blocks).pipe(
        map((blocks: DataItem<BlockDataAttributes>[]) => {
          return blocks.map((item: DataItem<BlockDataAttributes>) => mapToBlock(item));
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


function mapToBlock(item: DataItem<BlockDataAttributes>): Block {
  return new Block(item);
}
