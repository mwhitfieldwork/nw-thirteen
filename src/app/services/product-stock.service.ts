import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductStockService {

  url: string = 'https://localhost:7216/Product/';

  nwDataChanged: BehaviorSubject<any>;

  constructor(private _http: HttpClient) {
    this.nwDataChanged = new BehaviorSubject([]);
  }

  getProducts(): Observable<Product[]> {
    var response = this._http.get<Product[]>(this.url)
      .pipe(
        tap((value) => 
        this.nwDataChanged.next(value))
      )

    return response
  }

  private handleError(error: Response):void {
    console.error(error);
    //return Observable.throw(error || 'Server error');
  }

}
