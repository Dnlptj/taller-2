import { Component, Input, HostBinding } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.html'
})
export class ProductoCard {
  @Input() producto!: Producto;

  @HostBinding('class') clases = 'col-md-4 mb-3 d-block';
}
