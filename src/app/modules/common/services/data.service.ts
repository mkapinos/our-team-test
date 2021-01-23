import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data, DataItem, DataItemType } from '../models/data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {
  }

  getData<T>(type: DataItemType): Observable<DataItem<T>[]> {
    return this.httpClient.get<Data<T>>('https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json')
      .pipe(map(data => data.data.filter(item => item.type === type)));
  }
}
