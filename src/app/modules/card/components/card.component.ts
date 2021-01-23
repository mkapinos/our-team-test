import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../image/models/image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() image: Image;

  constructor() { }

  ngOnInit(): void {
  }

}
