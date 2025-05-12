import { Component, ViewChild } from '@angular/core';
import { PinchZoomComponent } from './pinch-zoom/pinch-zoom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  @ViewChild('pinch') pinchZoom!: PinchZoomComponent;

  move() {
    this.pinchZoom.setTransform({ x: 1, y: 1, scale: 1 });
  }
}
