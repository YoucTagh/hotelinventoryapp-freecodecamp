import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  FormControl,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: this.fb.control('1'),
      guestEmail: ['test@gmail.com'],
      checkinDate: [new Date('10-Feb-2020')],
      checkoutDate: [new Date('10-Feb-2020')],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([
        this.fb.group({
          guestName: [''],
          age: this.fb.control(''),
        }),
      ]),
      tnc: false,
    });
  }

  addPassport() {}
  deletePassport() {}

  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }

  addGuest() {
    this.guests.push(
      this.fb.group({ guestName: [''], age: this.fb.control('') })
    );
  }

  removeGuest(index: number) {
    this.guests.removeAt(index);
  }
}
