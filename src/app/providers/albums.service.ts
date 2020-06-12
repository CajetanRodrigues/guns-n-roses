import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient, private appService: AppService) { }

  fetchAlbums(): Observable<any> {
    return this.http.get<any>
      ('https://api.spotify.com/v1/me/following?type=artist', this.appService.httpOptions);
  }
}
