import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { MeetingComponent } from './meeting/meeting.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RoomsComponent,
    MeetingComponent,
    AddRoomComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    ReactiveFormsModule
  ]
})
export class RoomsModule { }
