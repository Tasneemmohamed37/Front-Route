import { APIResponseVM } from './../view models/apiresponse-vm';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericApiHandlerService {

  httpOptions;
  baseUrl:string = 'http://localhost:3000';


  constructor(private httpClient:HttpClient)
    {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
          // ,Authorization: 'my-auth-token'
        })
      };
    }

  private setHeaders(key:string, value:string) {
    this.httpOptions.headers.set(key,value)
  }

  GetAll(APIRoute:string):Observable<APIResponseVM>{
    return this.httpClient.get<APIResponseVM>(`${this.baseUrl}/${APIRoute}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  GetById(id:number){}

  Add(newObj:any){}

  Update(id:number, newObj:any){}

  Delete(id:number){}

  private handleError(error: HttpErrorResponse) {
    // Generic Error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Write error details in Generic error log

    // Return an observable with a user-facing error message.
    return throwError(
      ()=>new Error('Error occured, please try again')
    )
  }
}
