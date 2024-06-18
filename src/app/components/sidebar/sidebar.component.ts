import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [SidebarModule, ButtonModule],
})
export class SidebarComponent {
  Visible: boolean = false;
  
  sidebarVisible() {
    return this.Visible = !this.Visible;
  }
}
