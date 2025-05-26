import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  standalone: true,
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <button class="text-xl" routerLink="/">My Store</button>
      <app-primary-button
        [label]="'Cart (' + cartService.cart().length + ')'"
        (btnClicked)="showButtonClicked()"
        routerLink="/cart"
      ></app-primary-button>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  // title = 'My Ecommerce App'; // It is good upto angular-15
  // title = signal<string>('My Ecommerce App'); // In angular-16, signal are introduced. So use signals for dynamic data

  showButtonClicked() {
    console.log('clicked...');
  }

  cartService = inject(CartService);
}
