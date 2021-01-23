import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreData, StoreDataItem, StoreDataItemType } from '../models/data';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private httpClient: HttpClient) {
  }

  getData<T>(type: StoreDataItemType): Observable<StoreDataItem<T>[]> {
    return this.httpClient.get<StoreData<T>>(environment.storePath)
      .pipe(map(data => data.data.filter(item => item.type === type)));
  }
}
