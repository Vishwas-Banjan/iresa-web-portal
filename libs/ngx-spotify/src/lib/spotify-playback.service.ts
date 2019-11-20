import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyPlaybackService {
  constructor(private http: HttpClient) {}

  play(authToken, device_id, songURIs) {
    return this.http.request<any>(
      'PUT',
      'https://api.spotify.com/v1/me/player/play',
      {
        params: { device_id },
        body: JSON.stringify({ uris: songURIs }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        }
      }
    );
  }
}
