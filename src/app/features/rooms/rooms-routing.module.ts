import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { MeetingComponent } from './meeting/meeting.component';

const routes: Routes = [
  { path: '', component: RoomsComponent },
  { path: 'meetings', component: MeetingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
