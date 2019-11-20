import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpotifyModule } from '@iresa/ngx-spotify';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './ui/login/login.module';
import { DashboardModule } from './ui/dashboard/dashboard.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { WindowRef } from '@iresa/shared/utilities';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgxSpotifyModule.forRoot({
      clientId: environment.spotifyConfig.clientId,
      redirectUri: environment.spotifyConfig.redirectUri,
      // authToken: localStorage.getItem('angular2-spotify-token')
      authToken: environment.spotifyConfig.authToken
    }),
    StoreModule.forRoot([], {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production
        })
      : [],
    EffectsModule.forRoot([])
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule {}
