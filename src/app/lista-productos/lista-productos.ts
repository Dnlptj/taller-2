import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { ProductoForm } from '../producto-form/producto-form';
import {
  agregarProducto,
  eliminarProducto,
  votarPositivo,
  votarNegativo
} from '../store/productos.actions';
import { seleccionarProductos } from '../store/productos.selectors';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, ProductoForm],
  templateUrl: './lista-productos.html'
})
export class ListaProductos {
  productos$: Observable<Producto[]>;

  constructor(private store: Store) {
    this.productos$ = this.store.select(seleccionarProductos);
  }

  onProductoAgregado(datos: { nombre: string; descripcion: string }): void {
    const producto: Producto = {
      id: Date.now(),
      nombre: datos.nombre,
      descripcion: datos.descripcion,
      votos: 0
    };
    this.store.dispatch(agregarProducto({ producto }));
  }

  eliminar(id: number): void {
    this.store.dispatch(eliminarProducto({ id }));
  }

  votar(id: number, positivo: boolean): void {
    if (positivo) {
      this.store.dispatch(votarPositivo({ id }));
    } else {
      this.store.dispatch(votarNegativo({ id }));
    }
  }
}
