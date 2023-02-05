import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Zianid Hotel";
  numberOfRooms = 10;
  constructor() { }

  ngOnInit(): void {
  }

  increement(){
    this.numberOfRooms++;
  }

}
