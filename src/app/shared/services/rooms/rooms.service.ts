import { AppConfig } from './../../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from './../../../AppConfig/appconfig.service';
import { RoomList } from './../../../rooms/rooms';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  private http:HttpClient) {
    console.log(config.apiEndpoint) 
  }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms')
  }

  addRoom(room:RoomList){
    return this.http.post<RoomList[]>('/api/rooms',room);
  }
  
  updateRoom(room:RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`,room);
  }
  
  deleteRoom(room:RoomList){
    return this.http.delete<RoomList[]>(`/api/rooms/${room.roomNumber}`);
  }

  

}
