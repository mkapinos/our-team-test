import { DataService } from './data.service';
import { TestBed } from '@angular/core/testing';

describe('Data.Service.TsService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
