import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Block } from '../../../modules/block/models/block';
import { BlocksService } from '../../../modules/block/services/blocks.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class OurTeamResolver implements Resolve<Block> {
  constructor(private service: BlocksService) {}
  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.get(environment.ourTeamBlockId);
  }
}
