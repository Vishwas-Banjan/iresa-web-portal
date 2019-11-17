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
    redirectUri: 'http://localhost:8080',
    scope:
      'user-follow-modify user-follow-read playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-read user-library-modify user-read-private',
    authToken:
      'BQB6fLk2FZNPsssVV_4xh1wwPDzqli6x3mEbnUZuwWKIbtukdTeiwF210NcB21xpSvmR4Gh_JI0qK30UMnEy-Z6_dyD6UuHA1A0n5R7G3nDhzaOD8AhnF8ZdyFx4eUR-Xhcswr15IPpebfSyECcO3UUHfsnRz-fodD4-jVGg8PWHEYwpjw'
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
