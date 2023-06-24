import { HeaderModule } from './header/header.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RouteConfigToken } from './shared/services/config/routeConfig.service';


@NgModule({
  declarations: [
    RoomListComponent,
    RoomsComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule
  ],
  providers:[
    {
      provide: RouteConfigToken,
      useValue: { title: 'Room' },
    },
  ]
})
export class RoomsModule { }
