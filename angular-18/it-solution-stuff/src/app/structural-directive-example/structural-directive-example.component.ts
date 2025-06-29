import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural-directive-example.component.html',
  styleUrl: './structural-directive-example.component.css'
})
export class StructuralDirectiveExampleComponent {
users = [
    { id: 1, name: 'Hardik Savani' },
    { id: 2, name: 'Vimal Kashiyani' },
    { id: 3, name: 'Harshad Pathak' },
  ];

  type:number = 2;
}
