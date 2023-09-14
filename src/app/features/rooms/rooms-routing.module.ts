import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { MeetingComponent } from './meeting/meeting.component';
import { AddRoomComponent } from './add-room/add-room.component';

const routes: Routes = [
  { path: '', component: RoomsComponent },
  { path: 'meetings', component: MeetingComponent },
  { path: 'add-room', component: AddRoomComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
