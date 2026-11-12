import { createReducer, on } from '@ngrx/store';
import { Producto } from '../models/producto';
import {
  agregarProducto,
  eliminarProducto,
  votarPositivo,
  votarNegativo
} from './productos.actions';

export interface EstadoProductos {
  productos: Producto[];
}

export const estadoInicial: EstadoProductos = {
  productos: [
    { id: 1, nombre: 'Teclado mecánico', descripcion: 'Switches rojos', votos: 0 },
    { id: 2, nombre: 'Mouse inalámbrico', descripcion: 'Sensor 16000 DPI', votos: 0 }
  ]
};

export const productosReducer = createReducer(
  estadoInicial,

  on(agregarProducto, (state, { producto }) => ({
    ...state,
    productos: [...state.productos, producto]
  })),

  on(eliminarProducto, (state, { id }) => ({
    ...state,
    productos: state.productos.filter(p => p.id !== id)
  })),

  on(votarPositivo, (state, { id }) => ({
    ...state,
    productos: state.productos.map(p =>
      p.id === id ? { ...p, votos: p.votos + 1 } : p
    )
  })),

  on(votarNegativo, (state, { id }) => ({
    ...state,
    productos: state.productos.map(p =>
      p.id === id ? { ...p, votos: p.votos - 1 } : p
    )
  }))
);
