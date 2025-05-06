import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  headerName = 'Angular 14 Tutorial';
  salary = 0.35;
  isdisabled= false;
  colorname = 'green';
  font = '40px';

  constructor() { }

  ngOnInit(): void {
  }

  functionClick(name: string): void {
    alert('Testing function... ' + name);
  }
}
