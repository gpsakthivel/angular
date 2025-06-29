import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-pipe-example.component.html',
  styleUrl: './async-pipe-example.component.css'
})
export class AsyncPipeExampleComponent {
  currentTime$: Observable<any>;

  constructor() {
    /* Create an observable that emits the current time every second */
    this.currentTime$ = interval(1000).pipe(map(() => new Date()));
  }
}
