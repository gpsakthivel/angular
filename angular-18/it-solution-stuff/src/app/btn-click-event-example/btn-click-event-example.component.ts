import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-click-event-example',
  standalone: true,
  imports: [],
  templateUrl: './btn-click-event-example.component.html',
  styleUrl: './btn-click-event-example.component.css'
})
export class BtnClickEventExampleComponent {
  count: number = 0;
  clickMe() {
    this.count++;
  }
}
