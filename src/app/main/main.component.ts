import { Component } from '@angular/core';

// Components
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  template: `
    <section class="container-fluid d-flex justify-content-center">
      Desenvova sua aplicação por esse componente "Main"
    </section>
    <app-sidebar></app-sidebar>
  `,
})
export class MainComponent {}
