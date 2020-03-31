import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trade } from '../shared/trade';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'http://13.126.221.68:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  


  // HttpClient API get() method => Fetch trade
  getTrade(id): Observable<Trade> {
    return this.http.get<Trade>(this.apiURL + '/search/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

    // HttpClient API get() method => Fetch trade list
  getAllTrades(): Observable<Trade> {
      return this.http.get<Trade>(this.apiURL + '/searchall')
  }

  // HttpClient API post() method => Create trade
  createTrade(trade){
    console.log(trade);
    return this.http.post(this.apiURL + '/createTrade', JSON.stringify(trade), this.httpOptions);
  }  

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
