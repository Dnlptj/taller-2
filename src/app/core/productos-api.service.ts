import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { API_URL } from './tokens';
import { AppDb } from '../db/app.db';
import { Logger } from './logger';
import { Producto } from '../models/producto';
import { agregarProducto, cargarProductos } from '../store/productos.actions';

@Injectable({ providedIn: 'root' })
export class ProductosApiService {
  private http = inject(HttpClient);
  private store = inject(Store);
  private db = inject(AppDb);
  private logger = inject(Logger);
  private apiUrl = inject(API_URL);

  async cargar() {
    const productos = await firstValueFrom(this.http.get<Producto[]>(`${this.apiUrl}/productos`));
    this.store.dispatch(cargarProductos({ productos }));
    await this.db.productos.bulkPut(productos);
    this.logger.log(`Cargados ${productos.length} productos`);
  }

  async agregar(nombre: string, descripcion: string) {
    const res = await firstValueFrom(
      this.http.post<{ ok: boolean; producto: Producto }>(
        `${this.apiUrl}/productos`, { nombre, descripcion }
      )
    );

    if (res.ok) {
      // Punto 8: el servicio notifica a Redux
      this.store.dispatch(agregarProducto({ producto: res.producto }));
      // Punto 10: y también guarda en Dexie
      await this.db.productos.put(res.producto);
      this.logger.log(`Agregado: ${res.producto.nombre}`);
    }
  }
}
