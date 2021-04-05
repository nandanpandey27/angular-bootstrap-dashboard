import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;
  options: {headers: HttpHeaders};
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });

    this.options = {headers: this.headers};
  }

  get(url: string): Observable<any> {
    return this.http.get(url, this.options);
  }

  port(url: string, data: any): Observable<any> {
    return this.http.post(url, data, this.options);
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(url, data, this.options);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url, this.options);
  }
}
