import { Injectable, InjectionToken, Inject } from '@angular/core';
import { FirestoreConfig } from './firestore-config';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpRequestOptions } from './http-request-options';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import FireStoreParser from 'firestore-parser';

export const FirestoreConfigService = new InjectionToken<FirestoreConfig>(
  'FirestoreConfig'
);

@Injectable()
export class FirestoreService {
  constructor(
    @Inject(FirestoreConfigService) private config,
    private http: HttpClient
  ) {
    config.apiBase = `https://firestore.googleapis.com/v1/projects/${this.config.projectId}/databases/(default)/`;
  }

  signIn(email, password) {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.config.apiKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    );
  }

  setIdToken(token) {
    this.config.idToken = token;
  }

  getIdToken() {
    return this.config.idToken;
  }

  get(url, search?) {
    return this.api({
      method: 'get',
      url,
      search,
      headers: this.getHeaders()
    });
  }

  post(url, body?) {
    return this.api({
      method: 'post',
      url,
      body,
      headers: this.getHeaders()
    });
  }

  delete(url) {
    return this.api({
      method: 'delete',
      url,
      headers: this.getHeaders()
    });
  }

  patch(url, body) {
    return this.api({
      method: 'patch',
      url,
      body,
      headers: this.getHeaders()
    });
  }

  private api(requestOptions: HttpRequestOptions): Observable<any> {
    return this.http
      .request<any>(
        requestOptions.method || 'get',
        this.config.apiBase + requestOptions.url,
        {
          params: this.toQueryString(requestOptions.search || {}),
          body: JSON.stringify(requestOptions.body),
          headers: requestOptions.headers
        }
      )
      .pipe(map(resp => FireStoreParser(resp)));
  }

  private toQueryString(obj: Object): HttpParams {
    let params = new HttpParams();
    Object.keys(obj).forEach(key => {
      if (obj.hasOwnProperty(key)) {
        const val = encodeURIComponent(obj[key]);
        params = params.append(encodeURIComponent(key), val);
      }
    });
    return params;
  }

  private getHeaders(): HttpHeaders {
    return this.auth();
  }

  private auth(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.config.idToken}`);
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }
}
