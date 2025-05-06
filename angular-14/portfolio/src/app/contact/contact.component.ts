import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      contact works!
    </h2>
    <a routerLink="add">Add Contact</a>
    <a routerLink="edit/201">Edit Contact</a>

    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
