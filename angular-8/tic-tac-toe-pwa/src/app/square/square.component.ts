import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <!-- <p>{{ rando }}</p> -->
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }'],
})
export class SquareComponent {
  // rando = Math.random();
  // constructor() {
  //   setInterval(() => {
  //     this.rando = Math.random()
  //   }, 500)
  // }

  @Input() value: 'X' | 'O';
}
