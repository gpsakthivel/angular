import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dev-proxy';
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      data => {
        console.log(data);
        this.data = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
