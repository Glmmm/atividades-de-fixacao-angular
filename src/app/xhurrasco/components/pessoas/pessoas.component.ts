import { Component } from '@angular/core';
import { BlobOptions } from 'buffer';
import { ChevronRightIcon } from 'primeng/icons/chevronright';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.scss',
})
export class PessoasComponent {
  checked: boolean = false;

  onClick() {
    return this.checked = !this.checked;
    
  }
}
