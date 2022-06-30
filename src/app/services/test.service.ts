import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private readonly http: HttpClient) {
  }

  getConfig(): Promise<any> {
    return fetch('/config/config.json').then(res => res.json()).catch(error => console.error(error));
  }

  getUser(): Observable<any> {
    return this.http.get<any>('localhost:8080/rest/user', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
