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
    useSample: false,
    authToken:
      'BQBKeK9vlx1pyFZYgxp50602kaDgVOqO8EFBOiVgYeLTCvOYQr7BCqAoYA33_IIrj8u78rmPsDEBpKki7_HU1kZGgpN_a1XdAe1u07s-Tfuiz8ejxaZaJlFX81AgCE7eTo88rmh-AVyfgq769wjbJ2eZFFG6f39bSysn5TPb8KAWfA4v0xnnH38Htw'
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
