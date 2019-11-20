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
      'BQCD2guWNYTNb8_r3qf-8ejuAA_LIXugEURtoc4jB6aQ6IYgZ17wuuZ9m7WZglJrc93lEscdOacjaZTeh36uiBHpjbCxOHcBGkMA7x1oqlSYMo8u4WNwiLPJftGFmfnW96QfOkKITqYKspFJcDjD7qT9TNymUnzGbhoaUKo7cUiLvCSc41fbUleFRw'
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
