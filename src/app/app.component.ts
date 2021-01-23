import { Component, OnInit } from '@angular/core';
import { BlocksService } from './modules/block/services/blocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'our-team';

  constructor(private blocksService: BlocksService) {
  }

  ngOnInit(): void {
    this.blocksService.all().subscribe(data => {
      console.log(data);
    });

    this.blocksService.get('1').subscribe(data => {
      console.log(data);
    });
  }
}
