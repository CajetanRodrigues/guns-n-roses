import { AppService } from './../app.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient, private appService: AppService) { }

  fetchArtists(token): Observable<any> {
    return this.http.get<any>
      ('https://api.spotify.com/v1/me/following?type=artist', {
        headers: new HttpHeaders(
          {
            Authorization: 'Bearer ' + token
          })
      } );
  }
}
