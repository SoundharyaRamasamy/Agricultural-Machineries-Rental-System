import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { machinery } from './shared/machinery';
@Injectable({
  providedIn: 'root'
})
export class MachinerygetallService {
  baseurl = 'http://localhost:8081/api/AdminLoginService';
  
  constructor(private http: HttpClient) { }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  GetMachineries(): Observable<machinery> {
    return this.http
      .get<machinery>(this.baseurl + '/api/MachineryService/Machineries')
      .pipe(retry(1), catchError(this.errorHandl));
  } 
  CreateMachinery(data): Observable<machinery> {
    return this.http
      .post<machinery>(
        this.baseurl + '/api/MachineryService/create',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  } 
  

}
