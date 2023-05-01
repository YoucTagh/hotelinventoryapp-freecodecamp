import { RoomsService } from './../shared/services/rooms/rooms.service';
import { HeaderComponent } from './../header/header.component';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { timeStamp } from 'console';
import { Room, RoomList } from './rooms';
import { catchError, Head, map, observable, Observable, of, Subject, Subscription } from 'rxjs';
import { throws } from 'assert';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit, OnDestroy {
  hotelName = 'Zianid Hotel';
  numberOfRooms = 10;
  selectedRoom?: RoomList;

  hidden: boolean = true;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  stream = new Observable<string>((observable) => {
    observable.next('user1');
    observable.next('user2');
    observable.next('user3');
    observable.complete();
  });

  @ViewChild(
    HeaderComponent
    // , { static: true }
  )
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  totalBytes = 0;

  subscription!: Subscription;

  error$ = new Subject<string>() ;
  
  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRoom$.pipe(
    catchError((err) => {
      // console.log(err);
      this.error$.next(err.message)
      return of([]);
    })
  );

  roomsCount$ = this.roomsService.getRoom$.pipe(
    map((rooms) => rooms.length)
  )

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    // console.log(this.headerComponent);


    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Done'),
      error: (err) => console.log(err),
    });

    // this.roomsService.getRoom$.subscribe((data) => {
    //   this.roomList = data;
    // });

    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request Sent');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Request Success');
          break;
        case HttpEventType.DownloadProgress:
          console.log(`Download in Progress ${this.totalBytes}`);
          this.totalBytes += event.loaded;
          break;
        case HttpEventType.Response:
          console.log(event.body);
          break;
      }
    });
  }

  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
    this.headerComponent.title = 'Rooms View';
    this.headerChildrenComponent.forEach((h, index) => {
      h.title = `Room View ${index + 1} `;
    });
  }

  increement() {
    this.numberOfRooms++;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  deleteRoom(room: RoomList) {
    this.roomsService.deleteRoom(room).subscribe((data) => {
      this.roomList = data;
    });
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
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Updated Data',
      amenities: 'Am',
      price: 1200,
      photos:
        'https://images.unsplash.com/photo-1593624859907-dfe61e03dbeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      checkinTime: new Date('13-Nov-2022'),
      checkoutTime: new Date('16-Nov-2022'),
      rating: 3.353,
    };
    // this.roomList = [...this.roomList, room];
    this.roomsService.updateRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  hideRooms() {
    this.hidden = !this.hidden;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
