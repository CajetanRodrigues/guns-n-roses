import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private appService: AppService) { }

  fetchToken(): Observable<any> {
    return this.http.get<any>
      ('http://18.181.189.89:8888/token?id=0dkq7qw6rjp9cfmhas5n75axu');
  }
}
