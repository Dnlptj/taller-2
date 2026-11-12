import { Routes } from '@angular/router';
import { ListaProductos } from './lista-productos/lista-productos';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ListaProductos },
  { path: '**', redirectTo: 'productos' }
];
