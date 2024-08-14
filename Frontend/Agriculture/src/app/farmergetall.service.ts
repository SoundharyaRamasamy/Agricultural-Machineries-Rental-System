import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { farmer } from './shared/farmer';
@Injectable({
  providedIn: 'root'
})
export class FarmergetallService {
  baseurl = 'http://localhost:8081/api/AdminLoginService';
  
  constructor(private http: HttpClient) {}
  // Http Headers
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
  CreateFarmer(data): Observable<farmer> {
    return this.http
      .post<farmer>(
        this.baseurl + '/api/FarmerService/create',
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
