import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="container mt-5" style="max-width: 400px">
      <h2>Iniciar sesión</h2>
      <p class="text-muted">Demo del guard: cualquier usuario sirve.</p>
      <button class="btn btn-primary w-100" (click)="entrar()">Entrar</button>
    </div>
  `
})
export class Login {
  private auth = inject(AuthService);
  private router = inject(Router);

  entrar(): void {
    this.auth.login();
    this.router.navigate(['/productos']);
  }
}
