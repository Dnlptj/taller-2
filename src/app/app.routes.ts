import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { ListaProductos } from './lista-productos/lista-productos';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'productos', component: ListaProductos, canActivate: [authGuard] },
  { path: '**', redirectTo: 'productos' }
];
