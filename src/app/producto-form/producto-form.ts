import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { prohibido } from '../validadores/prohibido.validator';

@Component({
  selector: 'app-producto-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './producto-form.html'
})
export class ProductoForm {
  @Output() productoAgregado = new EventEmitter<{ nombre: string; descripcion: string }>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), prohibido('gratis')]],
      descripcion: ['', [Validators.required]]
    });
  }

  hasError(campo: string, error: string): boolean {
    const control = this.form.get(campo);
    return !!control && control.hasError(error) && control.touched;
  }

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.productoAgregado.emit(this.form.value);
    this.form.reset();
  }
}
