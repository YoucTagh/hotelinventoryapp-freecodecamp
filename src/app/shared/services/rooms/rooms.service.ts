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

  getRoomss() {
    return this.http.get<RoomList[]>('/api/rooms')
  }
}
