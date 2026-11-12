import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EstadoProductos } from './productos.reducer';

export const seleccionarEstado = createFeatureSelector<EstadoProductos>('productos');

export const seleccionarProductos = createSelector(
  seleccionarEstado,
  (estado) => estado.productos
);
