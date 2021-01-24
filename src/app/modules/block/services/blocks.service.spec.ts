import { TestBed } from '@angular/core/testing';
import { BlocksService } from './blocks.service';
import { StoreService } from '../../store/services/store.service';
import { of } from 'rxjs';
import { getStoreDataItem } from '../../store/tests/store.utils.spec';
import { StoreDataItem } from '../../store/models/data';
import { Block, BlockDataAttributes } from '../models/block';

describe('TeamService', () => {
  let service: BlocksService;
  let storeServiceSpy: jasmine.SpyObj<StoreService>;

  beforeEach(() => {

    const spyStoreService = jasmine.createSpyObj('OfficersService', ['getData']);

    TestBed.configureTestingModule({
      providers: [
        BlocksService,
        { provide: StoreService, useValue: spyStoreService },
      ]
    });
    service = TestBed.inject(BlocksService);
    storeServiceSpy = TestBed.inject(StoreService) as jasmine.SpyObj<StoreService>;

    storeServiceSpy.getData.and.returnValue(of([getStoreDataItem()]));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Block[] objects for all() method', (done) => {
    expect(service).toBeTruthy();
    service.all().subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0] instanceof Block).toBeTruthy();
      done();
    });
  });

  it('should get Block object by id for get(id) method', (done) => {
    expect(service).toBeTruthy();
    const itemData = getStoreDataItem() as StoreDataItem<BlockDataAttributes>;
    service.get('1').subscribe(data => {
      expect(data instanceof Block).toBeTruthy();
      expect(data.title).toBe(itemData.attributes.title);
      done();
    });
  });

  it('should get undefined for none exist object for get(id) method', (done) => {
    expect(service).toBeTruthy();
    const itemData = getStoreDataItem() as StoreDataItem<BlockDataAttributes>;
    service.get('').subscribe(data => {
      expect(data).toBeUndefined();
      done();
    });
  });
});
