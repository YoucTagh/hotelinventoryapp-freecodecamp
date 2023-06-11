import { RoomsService } from './../shared/services/rooms/rooms.service';
import { RoomList } from './../rooms/rooms';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss'],
})
export class RoomsAddComponent implements OnInit {
  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };

  successMessage: string = ''

  constructor(private roomService: RoomsService) {}

  ngOnInit(): void {}

  addRoom() {
    this.roomService.addRoom(this.room).subscribe(data=>{
      console.log(data);
      
      this.successMessage = 'Data Added'
    })
  }
}
