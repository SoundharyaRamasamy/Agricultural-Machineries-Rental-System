import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { admin } from './shared/admin'; 
@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  baseurl = 'http://localhost:8081/api/AdminLoginService';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
     GetLogin(data): Observable<admin>{
      console.log(data)
      return this.http
      .get<admin>(this.baseurl + '/login/' + data.username+'/'+ data.pwd)
      .pipe(retry(1),catchError(this.errorHandl));
      
      }
   errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
       //Get client-side error
      errorMessage = error.error.message;
    } else {
     //Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
    console.log(errorMessage);
    return throwError(() => {
     return errorMessage;
    });
  }
}