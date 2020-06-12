import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from '../app.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  pauseUserPlayback(token: any) {
    return this.http.put<any>
      ('https://api.spotify.com/v1/me/player/pause?device_id=513b5aa0a7f43302f6ddcf5fc9de35823646e818',{

      }, {
        headers: new HttpHeaders(
          {
            Authorization: 'Bearer ' + token
          })
      } );
  }

  constructor(private http: HttpClient, private appService: AppService, private authService: AuthService) { }

  startResumeUserPlayback(token, track): any {
      return this.http.put<any>
      ('https://api.spotify.com/v1/me/player/play?device_id=513b5aa0a7f43302f6ddcf5fc9de35823646e818',{
        uris: [track]
      }, {
        headers: new HttpHeaders(
          {
            Authorization: 'Bearer ' + token
          })
      } );
  }
}
