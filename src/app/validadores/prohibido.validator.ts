import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function prohibido(palabra: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = (control.value || '').toString().toLowerCase();
    if (valor.includes(palabra.toLowerCase())) {
      return { prohibido: { palabra } };
    }
    return null;
  };
}
