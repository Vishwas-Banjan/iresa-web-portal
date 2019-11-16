// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBIiVQtLEjGYBjE3vSY1xGZUMmrR6rbuRk',
    authDomain: 'iresa-musicapp.firebaseapp.com',
    databaseURL: 'https://iresa-musicapp.firebaseio.com',
    projectId: 'iresa-musicapp',
    storageBucket: 'iresa-musicapp.appspot.com',
    messagingSenderId: '232341377587',
    appId: '1:232341377587:web:eb9ebd3c4af61ec9388946',
    measurementId: 'G-2J6CLMM0SG'
  },
  spotifyConfig: {
    clientId: 'ABC123DEF456GHfddId789JKL',
    redirectUri: 'http://localhost:4200/callback.html',
    scope: 'user-follow-modify user-follow-read playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-read user-library-modify user-read-private',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
