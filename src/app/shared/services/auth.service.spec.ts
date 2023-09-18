import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let afs: AngularFirestore;
  let afAuth: AngularFireAuth;
  let router: Router;
  let ngZone: NgZone;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ 
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,],
      providers: [AuthService]
    });
    afs = TestBed.inject(AngularFirestore)
    afAuth = TestBed.inject(AngularFireAuth);
    router = TestBed.inject(Router);
    ngZone = TestBed.inject(NgZone);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
