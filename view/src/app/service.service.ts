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
      .pipe(tap(user => console.log('Leu usuários')),
      catchError(this.handleError('getAllUsers',[])) 
      );
    }

  getFilterUser(id:number): Observable<User>{
    const url = `${baseApi}/JSON/user/${id}`;
    return this.http.get<User>(url).pipe(tap(_ => console.log('Achou um usuário id=${id}')),
    catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  postUser(user): Observable<User> {
    return this.http.post<User>(`${baseApi}/user`, user, httpOptions)
      .pipe(tap((user: User) => console.log('Usuário cadastrado com w/ id=${user.id}' )
      ),catchError(this.handleError<User>('postUser')));
  }
  putUser(id,user): Observable<User> {
    const url = `${baseApi}/user/${id}`;
    return this.http.put(url,user,httpOptions)
      .pipe(tap(_ => console.log('atualiza um usuário com id = ${id}' ))
      ,catchError(this.handleError<any>('putUser')));
  }

  deleteUser(id): Observable<User> {
    const url = `${baseApi}/User/${id}`;

    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  private handleError<T> (operation = 'operation',result?: T){
    return(error:any): Observable<T> => {
      console.error(error);
      return of (result as T);
    }
  }
  

}
