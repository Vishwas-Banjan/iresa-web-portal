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
}
