import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/shared/common/room';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{

  rooms!: Room[];

  constructor(private roomService: RoomService){
  }

  ngOnInit(): void {
    this.roomService.getList().subscribe(
      data => this.rooms = data
    );
  }

}
