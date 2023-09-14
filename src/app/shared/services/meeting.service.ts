import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meeting } from '../common/meeting';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }

  meetings: Meeting[] = [
    { id: 1, subject: 'Meet up Qwik & Astro', from: '2023-09-13 19:00', to: '2023-09-13 21:00', roomId: 1 },
    { id: 2, subject: 'Welcome day', from: '2023-09-18 9:00', to: '2023-09-18 17:00', roomId: 2 },
  ];

  getList(): Observable<Meeting[]> {

    //return this.http.get<Room[]>("https://jsonplaceholder.typicode.com/posts");
    return of(this.meetings);
  }
}
