import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry,catchError } from 'rxjs/operators';
import { fertilizer } from './shared/fertilizer';
@Injectable({
  providedIn: 'root'
})
export class FertilizerService {
  baseurl = 'http://localhost:8081/api/AdminLoginService';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
  GetFertilizer(id): Observable<fertilizer> {
    return this.http
    .get<fertilizer>(this.baseurl + '/api/FertilizerService/Fertilizer/' + id)
    .pipe(retry(1),catchError(this.errorHandl));
  }
  delete(id) {
    return this.http.delete(this.baseurl+ '/api/FertilizerService/Fertilizer/' + id)
  }

  Updatefertilizer(id, data): Observable<fertilizer> {
    return this.http
      .put<fertilizer>(
        this.baseurl + '/api/FertilizerService/update',
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
