import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { FirestoreService } from '@iresa/firestore';

@Injectable()
export class AuthService {
  constructor(private firestore: FirestoreService) {}

  login({ email, password }) {
    return this.firestore.signIn(email, password).pipe(
      map((resp: any) => {
        this.firestore.setIdToken(resp.idToken);
        return { user: { email: resp.email, uid: resp.localId } };
      })
    );
  }

  getStationsByUser({ email, uid }) {
    const query = {
      structuredQuery: {
        where: {
          fieldFilter: {
            field: { fieldPath: 'uid' },
            op: 'EQUAL',
            value: { stringValue: uid }
          }
        },
        from: [{ collectionId: 'stations' }]
      }
    };
    const url = encodeURI(`documents:runQuery`);

    return this.firestore.post(url, query).pipe(
      map(resp =>
        resp.map(item => {
          const arr = item.document.name.split('/');
          const id = arr[arr.length - 1];
          return { ...item.document.fields, id };
        })
      ),
      map(stations => {
        return {
          stations,
          user: { email, uid }
        };
      })
    );
  }
}
