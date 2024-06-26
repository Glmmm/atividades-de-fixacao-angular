import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.scss',
})
export class PessoasComponent {
  nome: string = 'Carlos';
  telefone: string = '(18)996465611';
  checked: boolean = false;

  onClick() {
    return this.checked = !this.checked;
  }
}
