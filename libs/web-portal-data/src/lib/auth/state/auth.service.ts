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
      .snapshotChanges()
      .pipe(
        take(1),
        map((actions: any) => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }),
        map(stations => {
          return {
            stations,
            user: { email, uid }
          };
        })
      );
  }
}
