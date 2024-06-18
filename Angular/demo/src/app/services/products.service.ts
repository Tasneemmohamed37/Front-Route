import { APIResponseVM } from './../view models/apiresponse-vm';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from './../../environments/environment';
import { GenericApiHandlerService } from './generic-api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl:string = 'http://localhost:3000';
  httpOption;

  constructor(private httpClient:HttpClient) 
  {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,Authorization: 'my-auth-token'
      })
    };
  }

  // ----------------------- [ in case use generic API handler ]
  // constructor(private genericAPIService:GenericApiHandlerService) 
  // {
    
  // }
  
    // getAllProducts():Observable<IProduct[]>
  // {
  //   return this.genericAPIService.GetAll(`products`)
  //   .pipe(
  //     map((APIResponseVM:APIResponseVM)=>{return APIResponseVM.data})
  //   );
  // }

  getAllProducts():Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${this.baseUrl}/products`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }



  getProductsByCategoryId(catID:number):Observable<IProduct[]>
  {
    if(catID==0)
      return this.httpClient.get<IProduct[]>(`${this.baseUrl}/products`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );

    else
      return this.httpClient.get<IProduct[]>(`${this.baseUrl}/products?categoryID=${catID}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getProductById(prdID:number):Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${this.baseUrl}/products/${prdID}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  addProduct(newPrd:IProduct):Observable<IProduct>
  {
    // return this.httpClient.post<IProduct>(`${this.baseUrl}/products`, JSON.stringify(newPrd), this.httpOption );
    return this.httpClient
    .post<IProduct>(`${this.baseUrl}/products`, JSON.stringify(newPrd), this.httpOption)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }


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
