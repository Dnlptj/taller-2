import { Injectable } from '@angular/core';

export abstract class Logger {
  abstract log(msg: string): void;
}

@Injectable({ providedIn: 'root' })
export class ConsoleLogger extends Logger {
  log(msg: string) { console.log('[LOG]', msg); }
}

@Injectable({ providedIn: 'root' })
export class PrefixedLogger extends ConsoleLogger {
  override log(msg: string) { console.log('[TIENDA]', msg); }
}
