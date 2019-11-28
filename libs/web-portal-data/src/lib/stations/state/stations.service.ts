import { Injectable } from '@angular/core';
import { FirestoreService, FirestoreBuilderService } from '@iresa/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class StationsService {
  constructor(private firestore: FirestoreService) {}

  getStationsByUser(uid) {
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
      )
    );
  }

  getStationDetails(stationId) {
    const url = encodeURI(`documents/stations/${stationId}`);
    return this.firestore.get(url).pipe(map(resp => resp.fields));
  }

  updateStation(stationId, form) {
    const url = encodeURI(
      `documents/stations/${stationId}?${FirestoreBuilderService.buildPatchParams(
        form
      )}`
    );
    return this.firestore
      .patch(url, { fields: FirestoreBuilderService.build(form) })
      .pipe(map(resp => resp.fields));
  }
}
