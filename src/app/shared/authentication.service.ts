import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

const ENDPOINT_URL = environment.endpointURL;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user: any;

  constructor(private http: HttpClient) {}

  /**
   * Login to WordPress via JWT. Returns object with the following shape:
   * {
   *      token: "eyJ0eXAiOiJKV1QiLCJhbGci...",
   *      user_email: "someuser@somewhere.com",
   *      user_nicename: "wordpress",
   *      user_display_name: "wordpress"
   * }
   */

  doLogin(username, password) {
    return this.http.post(ENDPOINT_URL + 'jwt-auth/v1/token', {
      username,
      password,
    });
  }

  validateAuthToken(token) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + token);
    return this.http.post(
      ENDPOINT_URL + 'jwt-auth/v1/token/validate?token=' + token,
      {},
      { headers }
    );
  }

  getUser() {
    return this.user;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  setUser(user: any) {
    this.user = user;
  }
}
