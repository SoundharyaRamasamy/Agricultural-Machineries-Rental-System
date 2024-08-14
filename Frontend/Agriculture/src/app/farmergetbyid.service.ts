import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry,catchError } from 'rxjs/operators';
import { farmer } from './shared/farmer';
@Injectable({
  providedIn: 'root'
})
export class FarmergetbyidService {
  baseurl = 'http://localhost:8082/api/FarmerService';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
  GetFarmergetbyid(id) :Observable<farmer> {
    return this.http
    .get<farmer>(this.baseurl + '/Farmer/' + id)
    .pipe(retry(1),catchError(this.errorHandl));
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
