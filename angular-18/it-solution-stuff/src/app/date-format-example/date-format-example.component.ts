import { CommonModule, formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date-format-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-format-example.component.html',
  styleUrl: './date-format-example.component.css'
})
export class DateFormatExampleComponent {
  datemdY:string = '';
  now: Date = new Date();

  constructor(){
    this.datemdY = formatDate(this.now,'MM/dd/yyyy', "en-US");
  }
}
