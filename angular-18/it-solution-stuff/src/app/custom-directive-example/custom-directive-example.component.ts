import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnDirective } from './btn.directive';

@Component({
  selector: 'app-custom-directive-example',
  standalone: true,
  imports: [CommonModule, BtnDirective],
  templateUrl: './custom-directive-example.component.html',
  styleUrl: './custom-directive-example.component.css'
})
export class CustomDirectiveExampleComponent {

}
