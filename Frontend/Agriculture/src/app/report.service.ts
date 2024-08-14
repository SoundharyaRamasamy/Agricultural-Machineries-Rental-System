import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { farmer } from './shared/farmer';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  
  baseurl = 'http://localhost:8081/api/AdminLoginService';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  GetFarmers(): Observable<farmer> {
    return this.http
      .get<farmer>(this.baseurl + '/api/FarmerService/Farmers')
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