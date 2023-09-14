import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../common/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: Room[] = [
    { id: 1, name: 'Jupiter', capacity: 15, location: 'Adservio Puteaux' },
    { id: 2, name: 'Pluton', capacity: 5, location: 'Adservio Puteaux' }
  ];


  constructor(private http: HttpClient) { }

  getList(): Observable<Room[]> {

    //return this.http.get<Room[]>("https://jsonplaceholder.typicode.com/posts");
    return of(this.rooms);
  }
}
