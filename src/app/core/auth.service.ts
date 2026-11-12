import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _logueado = signal(false);
  logueado = this._logueado.asReadonly();

  login() { this._logueado.set(true); }
  logout() { this._logueado.set(false); }
  estaLogueado() { return this._logueado(); }
}
