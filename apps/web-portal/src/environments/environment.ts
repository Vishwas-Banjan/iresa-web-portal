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
    clientId: 'cfe874852c4144c1972bcb30484356e1',
    redirectUri: 'http://localhost:4200/authorize',
    useSample: false,
    authToken:
      'BQD0Lwzd_zSDvbIyI7Uzsd8UwVyNHAyIM1J-TzvzX0QBcOX9vaNCUSxoXl4WfoTrLiMKPgIEiyhyTUg9CTR_q2S9zWVPTdam1JnU-Z8FeoR7zPQUjvCV4nQseCj-nODPSB1w0kBMokcez6zEao9C2GSCZudotLNDkLx0KTwWTshjNWacSMm58qmLZw'
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
