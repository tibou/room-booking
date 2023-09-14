import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Meeting } from 'src/app/shared/common/meeting';
import { Room } from 'src/app/shared/common/room';
import { MeetingService } from 'src/app/shared/services/meeting.service';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  meetings!: Meeting[];

  constructor(public meetingService: MeetingService, public roomService: RoomService) { }

  ngOnInit(): void {
    this.meetingService.getList().subscribe(
      data => this.meetings = data
    );
    let rooms: Room[];

    this.roomService.getList().subscribe(
      data => rooms = data
    );

    this.meetings.forEach((element, index) => {
      this.meetings[index] = {
        ...element,
        room: this.getRoomName(rooms, element.roomId)
      }
    });
  }

  getRoomName(rooms: Room[], roomId: number): string | undefined {
    let room!: Room;

    rooms.forEach(
      element => {
        if (element.id === roomId) {
          room = element;
          return;
        }
      }
    )

    if (room) {
      return room.name;
    }

    return '';
  }


}
