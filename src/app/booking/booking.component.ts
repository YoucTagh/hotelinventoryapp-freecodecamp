import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  // guests!:FormGroup[];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: this.fb.control('1'),
      guestEmail: ['test@gmail.com'],
      checkinDate: [new Date('10-Feb-2020')],
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
      guests: [],
      tnc: false,
    });
  }


  addPassport(){

  }
  deletePassport(){}

  addBooking(){

  }

  addGuest(){

  }

  removeGuest(index:number){

  }
}