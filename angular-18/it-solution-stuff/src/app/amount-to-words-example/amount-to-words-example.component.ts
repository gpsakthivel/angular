import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AmountInWordsPipe } from './amount-in-words.pipe';

@Component({
  selector: 'app-amount-to-words-example',
  standalone: true,
  imports: [CommonModule, AmountInWordsPipe],
  templateUrl: './amount-to-words-example.component.html',
  styleUrl: './amount-to-words-example.component.css'
})
export class AmountToWordsExampleComponent {
  amountValue: string = "700000";
}
