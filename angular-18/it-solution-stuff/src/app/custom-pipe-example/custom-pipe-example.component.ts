import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GenderPipe } from './gender.pipe';
import { GenderLabelPipe } from './gender-label.pipe';

@Component({
  selector: 'app-custom-pipe-example',
  standalone: true,
  imports: [CommonModule, GenderPipe, GenderLabelPipe],
  templateUrl: './custom-pipe-example.component.html',
  styleUrl: './custom-pipe-example.component.css'
})
export class CustomPipeExampleComponent {
persons = [
    {
      id: 1,
      name: 'Hardik Savani',
      gender: 0,
      website: 'itsolutionstuff.com'
    },
    {
      id: 2,
      name: 'Kajal Patel',
      gender: 1,
      website: 'nicesnippets.com'
    },
    {
      id: 3,
      name: 'Harsukh Makawana',
      gender: 0,
      website: 'laracode.com'
    }
  ]
}
