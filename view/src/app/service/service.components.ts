import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {UserComponent} from '../user/user.component';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const baseApi = '/api/v1';

@Injectable({
  providedIn: 'root'
})

export class Service {
  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<UserComponent[]> {
    return this.http.get<UserComponent[]>(`${baseApi}JSON/user`)
      .pipe(tap(user => console.log('entrou'))
      );
  }
}


