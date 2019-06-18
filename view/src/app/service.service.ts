import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {User} from './user/user-schema';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const baseApi = '/api';

@Injectable({
  providedIn: 'root'
})

export class Service {
  constructor(private http: HttpClient) { }
  /*------------------------User----------------------------------------------*/
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseApi}/JSON/user`)
      .pipe(tap(user => console.log('entrou'))
      );
  }
  postUser(): Observable<User> {
    return this.http.post<User>(`${baseApi}/user`, user, httpOptions)
      .pipe(tap((user: User) => console.log('Usuário cadastrado.') ));
  }

}
