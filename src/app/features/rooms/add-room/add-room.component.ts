import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent {

  roomForm = new FormGroup({
    name: new FormControl('', Validators.required),
    capacity: new FormControl(0),
    location: new FormControl()
  });

  constructor(private roomService: RoomService){}

  submit(){
    alert(JSON.stringify(this.roomForm.value));

    this.roomService.create(this.roomForm.value);
  }

}
