import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpotifyModule } from '@iresa/ngx-spotify';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpotifyModule.forRoot({
      clientId: 'ABC123DEF456GHfddId789JKL',
      redirectUri: 'http://localhost:4200/callback.html',
      scope:
        'user-follow-modify user-follow-read playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-read user-library-modify user-read-private',
      authToken: localStorage.getItem('angular2-spotify-token')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
