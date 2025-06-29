import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user';

@Component({
  selector: 'app-interface-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interface-example.component.html',
  styleUrl: './interface-example.component.css'
})
export class InterfaceExampleComponent {
  user: User = {
    id: 1,
    name: 'Hardik Savani',
    email: 'hardik@gmail.com',
  };
}
