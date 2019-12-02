import { Injectable } from '@angular/core';
import { FirestoreService } from '@iresa/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class PollService {
  constructor(private firestore: FirestoreService) {}

  getSongList(stationId: string) {
    const query = {
      structuredQuery: {
        from: [{ collectionId: 'songList' }],
        orderBy: [
          { field: { fieldPath: 'upvoteCount' }, direction: 'DESCENDING' }
        ]
      }
    };
    const url = encodeURI(`documents/stations/${stationId}:runQuery`);
    return this.firestore
      .post(url, query)
      .pipe(map(resp => resp.map(item => item.document.fields)));
  }
}
