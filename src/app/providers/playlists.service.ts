import { AuthService } from './auth.service';
import { AppService } from './../app.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor(private http: HttpClient, private appService: AppService, private authService: AuthService) { }

  fetchUserPlaylists(token): any {
      return this.http.get<any>
      ('https://api.spotify.com/v1/me/playlists?user_id=0dkq7qw6rjp9cfmhas5n75axu', {
        headers: new HttpHeaders(
          {
            Authorization: 'Bearer ' + token
          })
      } );
  }
  fetchPlaylist(token, playlistId): any {
    return this.http.get<any>
    ('https://api.spotify.com/v1/playlists/' + playlistId + '/tracks', {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + token
        })
    } );
  }
  fetchPlaylistCover(token, playlistId): any {
    return this.http.get<any>
    ('https://api.spotify.com/v1/playlists/' + playlistId + '/images', {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + token
        })
    } );
  }
}
