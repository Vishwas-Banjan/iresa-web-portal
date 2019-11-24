import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { take, map } from 'rxjs/operators';
import { database } from 'firebase';

@Injectable()
export class AuthService {
  constructor(
    private firebaseAuth: AngularFireAuth,
    public db: AngularFirestore
  ) {}

  login({ email, password }) {
    return new Observable(observer => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(
        data => {
          observer.next(data);
        },
        reason => {}
      );
    });
  }

  getStationsByUser({ email, uid }) {
    return this.db
      .collection('stations', ref => ref.where('uid', '==', uid))
      .valueChanges()
      .pipe(
        take(1),
        map(stations => {
          return {
            stations,
            user: { email, uid }
          };
        })
      );
  }
}
