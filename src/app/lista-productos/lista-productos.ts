import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { ProductoForm } from '../producto-form/producto-form';
import { eliminarProducto, votarPositivo, votarNegativo } from '../store/productos.actions';
import { seleccionarProductos } from '../store/productos.selectors';
import { ProductosApiService } from '../core/productos-api.service';
import { AppDb } from '../db/app.db';
import { SALUDO } from '../core/tokens';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, ProductoForm],
  templateUrl: './lista-productos.html'
})
export class ListaProductos implements OnInit {
  private store = inject(Store);
  private api = inject(ProductosApiService);

  // Punto 9: Dexie inyectada en el componente
  db = inject(AppDb);

  // Punto 3: literal inyectado con token propio
  saludo = inject(SALUDO);

  productos$: Observable<Producto[]> = this.store.select(seleccionarProductos);

  ngOnInit(): void {
    this.api.cargar();
  }

  onProductoAgregado(datos: { nombre: string; descripcion: string }): void {
    this.api.agregar(datos.nombre, datos.descripcion);
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
