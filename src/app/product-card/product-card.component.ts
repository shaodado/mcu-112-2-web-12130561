import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productName!: string;
  @Input() authors!: string;
  @Input() company!: string;
  @Input() isShow = true;
  @Input() imgUrl!: string;
  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}
