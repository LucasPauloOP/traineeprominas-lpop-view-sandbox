import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {User} from './user/user-schema';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Teacher } from './teacher/teacher-schema';

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

  /*--------------------------Teacher------------------------------------------------------*/
  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${baseApi}/JSON/teacher`)
      .pipe(tap(teacher => console.log('Leu professores')),
      catchError(this.handleError('getAllTeachers',[])) 
      );
    }

  getFilterTeacher(id:number): Observable<Teacher>{
    const url = `${baseApi}/JSON/teacher/${id}`;
    return this.http.get<Teacher>(url).pipe(tap(_ => console.log('Achou um usuário id=${id}')),
    catchError(this.handleError<Teacher>(`getTeacher id=${id}`))
    );
  }

  postTeacher(teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${baseApi}/teacher`, teacher, httpOptions)
      .pipe(tap((teacher: Teacher) => console.log('professor cadastrado com w/ id=${teacher.id}' )
      ),catchError(this.handleError<Teacher>('postTeacher')));
  }
  putTeacher(id,teacher): Observable<Teacher> {
    const url = `${baseApi}/teacher/${id}`;
    return this.http.put(url,teacher,httpOptions)
      .pipe(tap(_ => console.log('atualiza um professor com id = ${id}' ))
      ,catchError(this.handleError<any>('putTeacher')));
  }

  deleteTeacher(id): Observable<Teacher> {
    const url = `${baseApi}/teacher/${id}`;

    return this.http.delete<Teacher>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o professor com id=${id}`)),
      catchError(this.handleError<Teacher>('deleteTeacher'))
    );
  }

  private handleError<T> (operation = 'operation',result?: T){
    return(error:any): Observable<T> => {
      console.error(error);
      return of (result as T);
    }
  }
  

}
