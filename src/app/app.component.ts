import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-tasks></app-tasks>
    <app-main></app-main>
  `,
})
export class AppComponent {
  title = 'atividade-de-fixacao-angular';
}
