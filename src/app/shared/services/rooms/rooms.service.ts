import { AppConfig } from './../../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from './../../../AppConfig/appconfig.service';
import { RoomList } from './../../../rooms/rooms';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [];

  getRoom$ = this.http.get<RoomList[]>('/api/rooms',{headers:{token:'123fjsxkls.'}}).pipe(shareReplay(1));

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(config.apiEndpoint);
  }

  getRooms() {
    const headers = new HttpHeaders({
      token: '1234djfsl;j',
    });
    return this.http.get<RoomList[]>('/api/rooms', { headers: headers });
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  updateRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(room: RoomList) {
    return this.http.delete<RoomList[]>(`/api/rooms/${room.roomNumber}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    );

    return this.http.request(request);
  }
}
