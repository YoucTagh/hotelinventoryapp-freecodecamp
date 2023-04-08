import { HeaderComponent } from './../header/header.component';
import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { timeStamp } from 'console';
import { Room, RoomList } from './rooms';
import { Head } from 'rxjs';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = 'Zianid Hotel';
  numberOfRooms = 10;
  selectedRoom?: RoomList;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

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

  @ViewChild(
    HeaderComponent
    // , { static: true }
  )
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.headerComponent);
  }

  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
    this.headerComponent.title = 'Rooms View';
    this.headerChildrenComponent.forEach((h, index) => {
      h.title = `Room View ${index+1} `;
    });
  }

  increement() {
    this.numberOfRooms++;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomType: 'Deluxe Room Trio',
      amenities: 'Air Conditioner',
      price: 1200,
      photos:
        'https://images.unsplash.com/photo-1593624859907-dfe61e03dbeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      checkinTime: new Date('13-Nov-2022'),
      checkoutTime: new Date('16-Nov-2022'),
      rating: 3.353,
    };
    this.roomList = [...this.roomList, room];
  }
}
