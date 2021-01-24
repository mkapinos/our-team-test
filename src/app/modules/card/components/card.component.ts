import { Component, Input } from '@angular/core';
import { Image } from '../../image/models/image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string;
  @Input() image: Image;
}
