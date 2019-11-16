import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpotifyModule } from '@iresa/ngx-spotify';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgxSpotifyModule.forRoot({
      clientId: environment.spotifyConfig.clientId,
      redirectUri: environment.spotifyConfig.redirectUri,
      scope: environment.spotifyConfig.scope,
      authToken: localStorage.getItem('angular2-spotify-token')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
