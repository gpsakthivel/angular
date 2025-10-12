import { Component } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {
  newBookingTitle: string = '';
  newBookingDate: Date = new Date();

  bookings: Book[] = [];

  ngOnInit() {
    let storedBookings = localStorage.getItem('bookings');
    this.bookings = storedBookings ? JSON.parse(storedBookings) : [];
  }

  addBooking() {
    if (this.newBookingTitle.trim().length && this.newBookingDate) {
      const newBooking: Book = {
        id: Date.now(),
        title: this.newBookingTitle,
        date: this.newBookingDate
      };
      this.bookings.push(newBooking);

      this.newBookingTitle = '';
      this.newBookingDate = new Date();

      localStorage.setItem('bookings', JSON.stringify(this.bookings));
    }
  }

  deleteBooking(index: number) {
    this.bookings.splice(index, 1);
    localStorage.setItem('bookings', JSON.stringify(this.bookings));
  }
}
