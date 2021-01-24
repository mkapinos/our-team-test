import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Block } from '../../../modules/block/models/block';

export const BLOCK_RESOLVER_NAME = 'block';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  block: Block;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.block = this.getResolverSnapshot();
  }

  private getResolverSnapshot(): Block {
    if (!this.route.snapshot.data[`block`]) {
      throw new Error('Wrong data');
    }
    return this.route.snapshot.data[BLOCK_RESOLVER_NAME] as Block;
  }

}
