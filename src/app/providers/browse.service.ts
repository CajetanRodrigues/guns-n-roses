import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrowseService {

  constructor(private http: HttpClient, private appService: AppService) { }

  fetchCategories(token): Observable<any> {
    return this.http.get<any>
      ('https://api.spotify.com/v1/browse/categories', {
        headers: new HttpHeaders(
          {
            Authorization: 'Bearer ' + token
          })
      });
  }
}
