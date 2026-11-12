import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { productosReducer } from './store/productos.reducer';
import { API_URL, SALUDO } from './core/tokens';
import { Logger, ConsoleLogger, PrefixedLogger } from './core/logger';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ productos: productosReducer }),

    // Punto 3: literal inyectado con token propio
    { provide: API_URL, useValue: 'http://localhost:3000' },
    { provide: SALUDO, useValue: 'Bienvenido a la tienda' },

    // Punto 4: interfaz/clase abstracta → clase concreta
    { provide: Logger, useClass: ConsoleLogger },

    // Punto 5: useExisting, una misma instancia bajo dos tokens
    { provide: PrefixedLogger, useExisting: Logger }
  ]
};
