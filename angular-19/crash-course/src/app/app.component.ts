import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  standalone: true,
  template: `
    <app-header></app-header>
    <router-outlet />
  `,
  styles: ``,
})
export class AppComponent {}
