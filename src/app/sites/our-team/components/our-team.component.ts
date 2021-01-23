import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Block } from '../../../modules/block/models/block';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  block: Block;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (!this.route.snapshot.data[`block`]) {
      throw new Error('Wrong data');
    }
    this.block = this.route.snapshot.data[`block`];
  }

}
