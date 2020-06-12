import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private appService: AppService) { }

  search(searchValue: string): Observable<any> {
    return this.http.get<any>
      ('https://api.spotify.com/v1/search?q=' + searchValue + '&type=track,artist,album', this.appService.httpOptions);
  }
}
