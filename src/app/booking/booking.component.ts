import { BookingService } from './service/booking.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';

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

  get emailFormControl() {
    return this.bookingForm.get('guestEmail') as FormControl;
  }

  constructor(private fb: FormBuilder,private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group(
      {
        roomId: this.fb.control('1', { validators: [Validators.required] }),
        guestEmail: [
          'test@gmail.com',
          {
            validators: [Validators.required, Validators.email],
            updateOn: 'blur',
          },
        ],
        checkinDate: [new Date('10-Feb-2020')],
        checkoutDate: [new Date('10-Feb-2020')],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: [''],
        guestName: ['', [Validators.minLength(5),CustomValidator.ValidateSpecialChar('gh')]],
        address: this.fb.group({
          addressLine1: ['', [Validators.required]],
          addressLine2: [''],
          city: [''],
          state: [''],
          country: [''],
          zipCode: [''],
        }),
        guests: this.fb.array([
          this.fb.group({
            guestName: ['', [Validators.required]],
            age: this.fb.control(''),
          }),
        ]),
        tnc: [false, [Validators.requiredTrue]],
      },
      // { updateOn: 'change' }
    );

    this.getBookingData();
    // this.bookingForm.valueChanges.subscribe((data) => {
    //   this.bookingService.bookRoom(data).subscribe((data)=>{

    //   })
    // });
    this.bookingForm.valueChanges.pipe(
      exhaustMap((data)=> this.bookingService.bookRoom(data))
    ).subscribe((data)=>{
      console.log(data);
      
    })
  }

  getBookingData() {
    this.bookingForm.patchValue({
      roomId: '1',
      guestEmail: 'test@yh',
      checkinDate: new Date('20-Feb-2020'),
      checkoutDate: new Date('20-Feb-2020'),
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: true,
    });
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  deletePassport() {
    this.bookingForm.removeControl('passport');
  }

  addBooking() {
    // console.log(this.bookingForm.getRawValue());
    // this.bookingForm.reset({
    //   roomId: '1',
    //   guestEmail: 'test@gmail.com',
    //   checkinDate: new Date('10-Feb-2020'),
    //   checkoutDate: new Date('10-Feb-2020'),
    //   bookingStatus: '',
    //   bookingAmount: '',
    //   bookingDate: '',
    //   mobileNumber: '',
    //   guestName: '',
    //   address: {
    //     addressLine1: '',
    //     addressLine2: '',
    //     city: '',
    //     state: '',
    //     country: '',
    //     zipCode: '',
    //   },
    //   guests: [],
    //   tnc: false,
    // });
    this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data)=>{
        console.log(data);
        
    })
  }

  addGuest() {
    this.guests.push(
      this.fb.group({
        guestName: ['', { validators: [Validators.required] }],
        age: this.fb.control(''),
      })
    );
  }

  removeGuest(index: number) {
    this.guests.removeAt(index);
  }
}
