import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true, transform: numberAttribute }) id!: number;
  @Input() productName!: string;
  @Input() authors!: string;
  @Input() company!: string;
  @Input() imgUrl!: string;

  @Input({ transform: booleanAttribute }) isShow!: boolean;
  @Output() isShowChange = new EventEmitter<boolean>();
  onSetDisplay(isShow: boolean): void {
    this.isShowChange.emit(isShow);
  }
}
