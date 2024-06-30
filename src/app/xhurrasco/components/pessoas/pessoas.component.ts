import { Component } from '@angular/core';
import { Pessoas } from './services/models/pessoas';
import { PessoasService } from './services/pessoas.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.scss',
})
export class PessoasComponent {
  pessoas: Pessoas[] = [];
  convidado: string = 'Não convidado';
  checked: boolean = false;

  constructor(private pessoasService: PessoasService) {}

  ngOnInit(): void {
    this.getAll();
  }
  public getAll(): void {
    this.pessoasService.getPessoas().subscribe({
      next: (item) => {
        this.pessoas = item;
      },
      error: (err: HttpErrorResponse) => {},
    });
  }
  onClick() {
    this.checked = !this.checked;
    this.checked ? this.convidado = "Convidado" : this.convidado = "Não convidado"
  }
}
