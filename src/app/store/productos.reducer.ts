import { createReducer, on } from '@ngrx/store';
import { Producto } from '../models/producto';
import {
  agregarProducto,
  cargarProductos,
  eliminarProducto,
  votarPositivo,
  votarNegativo
} from './productos.actions';

export interface EstadoProductos {
  productos: Producto[];
}

export const estadoInicial: EstadoProductos = { productos: [] };

export const productosReducer = createReducer(
  estadoInicial,
  on(cargarProductos, (state, { productos }) => ({ ...state, productos })),
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
    productos: state.productos.map(p => (p.id === id ? { ...p, votos: p.votos + 1 } : p))
  })),
  on(votarNegativo, (state, { id }) => ({
    ...state,
    productos: state.productos.map(p => (p.id === id ? { ...p, votos: p.votos - 1 } : p))
  }))
);
