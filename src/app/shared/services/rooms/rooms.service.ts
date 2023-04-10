import { RoomList } from './../../../rooms/rooms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-fi, TV,Bathroom, Kitchen',
      price: 400,
      photos:
        'https://images.unsplash.com/photo-1593624859907-dfe61e03dbeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4,
    },
    {
      roomType: 'Deluxe Room Duo',
      amenities: 'Air Conditioner, Free Wi-fi',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1593624859907-dfe61e03dbeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      checkinTime: new Date('13-Nov-2021'),
      checkoutTime: new Date('16-Nov-2021'),
      rating: 2.353,
    },
  ];

  constructor() {}

  getRoomss() {
    return this.roomList;
  }
}
