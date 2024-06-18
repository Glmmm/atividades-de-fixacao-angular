import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <app-tasks />
    <main class="container-fluid">
      <app-main></app-main>
    </main>
  `,
})
export class AppComponent {
  title = 'atividade-de-fixacao-angular';
}
