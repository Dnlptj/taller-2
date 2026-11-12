import { createAction, props } from '@ngrx/store';
import { Producto } from '../models/producto';

export const agregarProducto = createAction(
  '[Productos] Agregar',
  props<{ producto: Producto }>()
);

export const cargarProductos = createAction(
  '[Productos] Cargar',
  props<{ productos: Producto[] }>()
);

export const eliminarProducto = createAction(
  '[Productos] Eliminar',
  props<{ id: number }>()
);

export const votarPositivo = createAction(
  '[Productos] Voto positivo',
  props<{ id: number }>()
);

export const votarNegativo = createAction(
  '[Productos] Voto negativo',
  props<{ id: number }>()
);
