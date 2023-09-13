import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  user: any;

  constructor(public authService: AuthService){

  }

  ngOnInit(): void {
   this.user = JSON.parse(localStorage.getItem('user')!);
  }
}
