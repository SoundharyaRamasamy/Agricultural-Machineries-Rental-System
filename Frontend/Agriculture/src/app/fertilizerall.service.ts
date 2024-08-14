import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { fertilizer } from './shared/fertilizer';
@Injectable({
  providedIn: 'root'
})
export class FertilizerallService {
  baseurl = 'http://localhost:8083/api/FertilizerService';
  constructor(private http: HttpClient) { }
  // Http Headers
  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
   }),
 };
  GetFertilizer(): Observable<fertilizer> {
    return this.http
      .get<fertilizer>(this.baseurl + '/Fertilizers')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  CreateFertilizer(data): Observable<fertilizer> {
    return this.http
      .post<fertilizer>(
        this.baseurl + '/api/FertilizerService/create',
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
