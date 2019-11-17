import { Injectable, Inject, InjectionToken } from '@angular/core';
import { SpotifyConfig } from './spotify-config';
import { SpotifyOptions } from './spotify-options';
import { HttpRequestOptions } from './http-request-options';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const SpotifyConfigService = new InjectionToken<SpotifyConfig>(
  'SpotifyConfig'
);

@Injectable()
export class SpotifyService {
  constructor(
    @Inject(SpotifyConfigService) private config,
    private http: HttpClient
  ) {
    config.apiBase = 'https://api.spotify.com/v1';
  }

  /**
   * Gets an album
   * Pass in album id or spotify uri
   */
  getAlbum(album: string) {
    album = this.getIdFromUri(album);
    return this.api({
      method: 'get',
      url: `/albums/${album}`
    }).pipe(map(res => res.json()));
  }

  /**
   * Gets albums
   * Pass in comma separated string or array of album ids
   */
  getAlbums(albums: string | Array<string>) {
    const albumList = this.mountItemList(albums);
    return this.api({
      method: 'get',
      url: `/albums`,
      search: { ids: albumList.toString() }
    }).pipe(map(res => res.json()));
  }

  /**
   * Get Album Tracks
   * Pass in album id or spotify uri
   */
  getAlbumTracks(album: string, options?: SpotifyOptions) {
    album = this.getIdFromUri(album);
    return this.api({
      method: 'get',
      url: `/albums/${album}/tracks`,
      search: options
    }).pipe(map(res => res.json()));
  }

  //#endregion

  //#region artists

  /**
   * Get an Artist
   */
  getArtist(artist: string) {
    artist = this.getIdFromUri(artist);
    return this.api({
      method: 'get',
      url: `/artists/${artist}`
    }).pipe(map(res => res.json()));
  }

  /**
   * Get multiple artists
   */
  getArtists(artists: string | Array<string>) {
    const artistList = this.mountItemList(artists);
    return this.api({
      method: 'get',
      url: `/artists/`,
      search: { ids: artists.toString() }
    }).pipe(map(res => res.json()));
  }

  //Artist Albums
  getArtistAlbums(artist: string, options?: SpotifyOptions) {
    artist = this.getIdFromUri(artist);
    return this.api({
      method: 'get',
      url: `/artists/${artist}/albums`,
      search: options
    }).pipe(map(res => res.json()));
  }

  /**
   * Get Artist Top Tracks
   * The country: an ISO 3166-1 alpha-2 country code.
   */
  getArtistTopTracks(artist: string, country: string) {
    artist = this.getIdFromUri(artist);
    return this.api({
      method: 'get',
      url: `/artists/${artist}/top-tracks`,
      search: { country: country }
    }).pipe(map(res => res.json()));
  }

  getRelatedArtists(artist: string) {
    artist = this.getIdFromUri(artist);
    return this.api({
      method: 'get',
      url: `/artists/${artist}/related-artists`
    }).pipe(map(res => res.json()));
  }

  //#endregion

  //#region browse

  getFeaturedPlaylists(options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/browse/featured-playlists`,
      search: options,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  getNewReleases(options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/browse/new-releases`,
      search: options,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  getCategories(options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/browse/categories`,
      search: options,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  getCategory(categoryId: string, options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/browse/categories/${categoryId}`,
      search: options,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  getCategoryPlaylists(categoryId: string, options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/browse/categories/${categoryId}/playlists`,
      search: options,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  getRecommendations(options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/recommendations`,
      search: options,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  getAvailableGenreSeeds() {
    return this.api({
      method: 'get',
      url: `/recommendations/available-genre-seeds`,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  //#endregion

  //#region following

  following(type: string, options?: SpotifyOptions) {
    options = options || {};
    options.type = type;
    return this.api({
      method: 'get',
      url: `/me/following`,
      search: options,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  follow(type: string, ids: string | Array<string>) {
    return this.api({
      method: 'put',
      url: `/me/following`,
      search: { type: type, ids: ids.toString() },
      headers: this.getHeaders()
    });
  }

  unfollow(type: string, ids: string | Array<string>) {
    return this.api({
      method: 'delete',
      url: `/me/following`,
      search: { type: type, ids: ids.toString() },
      headers: this.getHeaders()
    });
  }

  userFollowingContains(type: string, ids: string | Array<string>) {
    return this.api({
      method: 'get',
      url: `/me/following/contains`,
      search: { type: type, ids: ids.toString() },
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  followPlaylist(userId: string, playlistId: string, isPublic?: boolean) {
    return this.api({
      method: 'put',
      url: `/users/${userId}/playlists/${playlistId}/followers`,
      body: { public: !!isPublic },
      headers: this.getHeaders(true)
    });
  }

  unfollowPlaylist(userId: string, playlistId: string) {
    return this.api({
      method: 'delete',
      url: `/users/${userId}/playlists/${playlistId}/followers`,
      headers: this.getHeaders()
    });
  }

  playlistFollowingContains(
    userId: string,
    playlistId: string,
    ids: string | Array<string>
  ) {
    return this.api({
      method: 'get',
      url: `/users/${userId}/playlists/${playlistId}/followers/contains`,
      search: { ids: ids.toString() },
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  //#endregion

  //#region library

  getSavedUserTracks(options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/me/tracks`,
      headers: this.getHeaders(),
      search: options
    }).pipe(map(res => res.json()));
  }

  userTracksContains(tracks: string | Array<string>) {
    const trackList = this.mountItemList(tracks);
    return this.api({
      method: 'get',
      url: `/me/tracks/contains`,
      headers: this.getHeaders(),
      search: { ids: trackList.toString() }
    }).pipe(map(res => res.json()));
  }

  saveUserTracks(tracks: string | Array<string>) {
    const trackList = this.mountItemList(tracks);

    return this.api({
      method: 'put',
      url: `/me/tracks`,
      headers: this.getHeaders(),
      search: { ids: trackList.toString() }
    });
  }

  removeUserTracks(tracks: string | Array<string>) {
    const trackList = this.mountItemList(tracks);

    return this.api({
      method: 'delete',
      url: `/me/tracks`,
      headers: this.getHeaders(),
      search: { ids: trackList.toString() }
    });
  }

  getSavedUserAlbums(options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/me/albums`,
      headers: this.getHeaders(),
      search: options
    }).pipe(map(res => res.json()));
  }

  saveUserAlbums(albums: string | Array<string>) {
    const albumList = this.mountItemList(albums);

    return this.api({
      method: 'put',
      url: `/me/albums`,
      headers: this.getHeaders(),
      search: { ids: albumList.toString() }
    });
  }

  removeUserAlbums(albums: string | Array<string>) {
    const albumList = this.mountItemList(albums);

    return this.api({
      method: 'delete',
      url: `/me/albums`,
      headers: this.getHeaders(),
      search: { ids: albumList.toString() }
    });
  }

  userAlbumsContains(albums: string | Array<string>) {
    const albumList = this.mountItemList(albums);

    return this.api({
      method: 'get',
      url: `/me/albums/contains`,
      headers: this.getHeaders(),
      search: { ids: albumList.toString() }
    }).pipe(map(res => res.json()));
  }

  //#endregion

  //#region personalization

  getUserTopArtists(options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/me/top/artists`,
      search: options,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  getUserTopTracks(options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/me/top/tracks`,
      search: options,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  getUserRecentlyPlayed(options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/me/player/recently-played`,
      search: options,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  //#endregion

  //#region playlists

  getUserPlaylists(userId: string, options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/users/${userId}/playlists`,
      headers: this.getHeaders(),
      search: options
    }).pipe(map(res => res.json()));
  }

  getCurrentUserPlaylists(options?: SpotifyOptions) {
    return this.api({
      method: 'get',
      url: `/me/playlists/`,
      search: options,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  getPlaylist(
    userId: string,
    playlistId: string,
    options?: { fields: string }
  ) {
    return this.api({
      method: 'get',
      url: `/users/${userId}/playlists/${playlistId}`,
      headers: this.getHeaders(),
      search: options
    }).pipe(map(res => res.json()));
  }

  getPlaylistTracks(
    userId: string,
    playlistId: string,
    options?: SpotifyOptions
  ) {
    return this.api({
      method: 'get',
      url: `/users/${userId}/playlists/${playlistId}/tracks`,
      headers: this.getHeaders(),
      search: options
    }).pipe(map(res => res.json()));
  }

  createPlaylist(userId: string, options: { name: string; public?: boolean }) {
    return this.api({
      method: 'post',
      url: `/users/${userId}/playlists`,
      headers: this.getHeaders(true),
      body: options
    }).pipe(map(res => res.json()));
  }

  addPlaylistTracks(
    userId: string,
    playlistId: string,
    tracks: string | Array<string>,
    options?: { position: number }
  ) {
    const trackList = Array.isArray(tracks) ? tracks : tracks.split(',');
    trackList.forEach((value, index) => {
      trackList[index] =
        value.indexOf('spotify:') === -1 ? 'spotify:track:' + value : value;
    });

    const search = { uris: trackList.toString() };
    if (!!options) search['position'] = options.position;

    return this.api({
      method: 'post',
      url: `/users/${userId}/playlists/${playlistId}/tracks`,
      headers: this.getHeaders(true),
      search: search
    }).pipe(map(res => res.json()));
  }

  removePlaylistTracks(
    userId: string,
    playlistId: string,
    tracks: string | Array<string>
  ) {
    const trackList = Array.isArray(tracks) ? tracks : tracks.split(',');
    const trackUris = [];
    trackList.forEach((value, index) => {
      trackUris[index] = {
        uri: value.indexOf('spotify:') === -1 ? 'spotify:track:' + value : value
      };
    });
    return this.api({
      method: 'delete',
      url: `/users/${userId}/playlists/${playlistId}/tracks`,
      headers: this.getHeaders(true),
      body: { tracks: trackUris }
    }).pipe(map(res => res.json()));
  }

  reorderPlaylistTracks(
    userId: string,
    playlistId: string,
    options: {
      range_start: number;
      range_length?: number;
      insert_before: number;
      snapshot_id?: string;
    }
  ) {
    return this.api({
      method: 'put',
      url: `/users/${userId}/playlists/${playlistId}/tracks`,
      headers: this.getHeaders(true),
      body: options
    }).pipe(map(res => res.json()));
  }

  replacePlaylistTracks(
    userId: string,
    playlistId: string,
    tracks: string | Array<string>
  ) {
    const trackList = Array.isArray(tracks) ? tracks : tracks.split(',');
    trackList.forEach((value, index) => {
      trackList[index] =
        value.indexOf('spotify:') === -1 ? 'spotify:track:' + value : value;
    });

    return this.api({
      method: 'put',
      url: `/users/${userId}/playlists/${playlistId}/tracks`,
      headers: this.getHeaders(),
      search: { uris: trackList.toString() }
    }).pipe(map(res => res.json()));
  }

  updatePlaylistDetails(userId: string, playlistId: string, options: Object) {
    return this.api({
      method: 'put',
      url: `/users/${userId}/playlists/${playlistId}`,
      headers: this.getHeaders(true),
      body: options
    });
  }

  //#endregion

  //#region profiles

  getUser(userId: string) {
    return this.api({
      method: 'get',
      url: `/users/${userId}`
    }).pipe(map(res => res.json()));
  }

  getCurrentUser() {
    return this.api({
      method: 'get',
      url: `/me`,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  //#endregion

  //#region search

  /**
   * Search Spotify
   * q = search query
   * type = artist, album or track
   */
  search(q: string, type: string, options?: SpotifyOptions) {
    options = options || {};
    options.q = q;
    options.type = type;

    return this.api({
      method: 'get',
      url: `/search`,
      search: options,
      headers: this.getHeaders()
    }, true).pipe(map(res => res.json()));
  }

  //#endregion

  //#region tracks

  getTrack(track: string) {
    track = this.getIdFromUri(track);
    return this.api({
      method: 'get',
      url: `/tracks/${track}`
    }).pipe(map(res => res.json()));
  }

  getTracks(tracks: string | Array<string>) {
    const trackList = this.mountItemList(tracks);
    return this.api({
      method: 'get',
      url: `/tracks/`,
      search: { ids: trackList.toString() }
    }).pipe(map(res => res.json()));
  }

  getTrackAudioAnalysis(track: string) {
    track = this.getIdFromUri(track);
    return this.api({
      method: 'get',
      url: `/audio-analysis/${track}`,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  getTrackAudioFeatures(track: string) {
    track = this.getIdFromUri(track);
    return this.api({
      method: 'get',
      url: `/audio-features/${track}`,
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  getTracksAudioFeatures(tracks: string | Array<string>) {
    const trackList = this.mountItemList(tracks);
    return this.api({
      method: 'get',
      url: `/audio-features/`,
      search: { ids: trackList.toString() },
      headers: this.getHeaders()
    }).pipe(map(res => res.json()));
  }

  //#endregion

  //#region login

  login() {
    const promise = new Promise((resolve, reject) => {
      const w = 400,
        h = 500,
        left = screen.width / 2 - w / 2,
        top = screen.height / 2 - h / 2;

      const params = {
        client_id: this.config.clientId,
        redirect_uri: this.config.redirectUri,
        scope: this.config.scope || '',
        response_type: 'token'
      };
      let authCompleted = false;
      const authWindow = this.openDialog(
        'https://accounts.spotify.com/authorize?' +
          this.toQueryString(params).toString(),
        'Spotify',
        'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=' +
          w +
          ',height=' +
          h +
          ',top=' +
          top +
          ',left=' +
          left,
        () => {
          if (!authCompleted) {
            return reject('Login rejected error');
          }
        }
      );

      const storageChanged = e => {
        if (e.key === 'angular2-spotify-token') {
          if (authWindow) {
            authWindow.close();
          }
          authCompleted = true;

          this.config.authToken = e.newValue;
          window.removeEventListener('storage', storageChanged, false);

          return resolve(e.newValue);
        }
      };
      window.addEventListener('storage', storageChanged, false);
    });

    return from(promise).pipe(catchError(this.handleError));
  }

  //#endregion

  //#region utils

  private toQueryString(obj: Object, ignoreEncode?): HttpParams {
    let params = new HttpParams();
    Object.keys(obj).forEach(key => {
      if (obj.hasOwnProperty(key)) {
        const val = ignoreEncode ? obj[key] : encodeURIComponent(obj[key]);
        params = params.append(
          encodeURIComponent(key),
          val
        );
      }
    });
    return params;
  }

  private openDialog(uri, name, options, cb) {
    const win = window.open(uri, name, options);
    const interval = window.setInterval(() => {
      try {
        if (!win || win.closed) {
          window.clearInterval(interval);
          cb(win);
        }
      } catch (e) {}
    }, 1000000);
    return win;
  }

  private auth(isJson?: boolean): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      `Bearer ${this.config.authToken}`
    );
    if (!isJson) {
      headers = headers.append('Content-Type', 'application/json');
    }
    return headers;
  }

  private getHeaders(isJson?): HttpHeaders {
    return this.auth(isJson);
  }

  private getIdFromUri(uri: string) {
    return uri.indexOf('spotify:') === -1 ? uri : uri.split(':')[2];
  }

  private mountItemList(items: string | Array<string>): Array<string> {
    const itemList = Array.isArray(items) ? items : items.split(',');
    itemList.forEach((value, index) => {
      itemList[index] = this.getIdFromUri(value);
    });
    return itemList;
  }

  private handleError(error: Response) {
    console.error(error);
    return throwError(error.json() || 'Server error');
  }

  private api(requestOptions: HttpRequestOptions, ignoreEncode?): Observable<any> {
    return this.http.request<any>(
      requestOptions.method || 'get',
      this.config.apiBase + requestOptions.url,
      {
        params: this.toQueryString(requestOptions.search, ignoreEncode),
        body: JSON.stringify(requestOptions.body),
        headers: requestOptions.headers
      }
    );
  }
}
