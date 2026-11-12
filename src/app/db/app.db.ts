import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Producto } from '../models/producto';

@Injectable({ providedIn: 'root' })
export class AppDb extends Dexie {
  productos!: Table<Producto, number>;

  constructor() {
    super('tienda-db');
    this.version(1).stores({ productos: 'id, nombre' });
  }
}
