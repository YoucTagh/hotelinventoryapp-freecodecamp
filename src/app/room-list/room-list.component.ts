import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush 
})
export class RoomListComponent implements OnInit,OnChanges,OnDestroy {
  @Input() roomList: RoomList[] = [];
  @Output() selectedRoom: EventEmitter<RoomList> = new EventEmitter<RoomList>();
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
      console.log("On destroy called on room list");
      
  }
}
