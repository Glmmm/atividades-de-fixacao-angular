import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  constructor() {}
  local = new FormGroup({
    rua: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    complemento: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    vagas: new FormControl('', [Validators.required]),
    limite: new FormControl('', [Validators.required]),
    aluguel: new FormControl('', [Validators.required]),
  });
}
