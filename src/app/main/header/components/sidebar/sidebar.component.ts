import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterOutlet,  } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [SidebarModule, ButtonModule, RouterLink, RouterOutlet],
})
export class SidebarComponent {
  Visible: boolean = false;
  
  sidebarVisible() {
    return this.Visible = !this.Visible;
  }
}