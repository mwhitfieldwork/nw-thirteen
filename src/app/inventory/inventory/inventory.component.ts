import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductStockService } from 'src/app/services/product-stock.service';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms'; 
import { StockValidators } from './stock-inventory.validators';
import { catchError, Observable, throwError } from 'rxjs';

interface Stock {
  product_id: number;
  quantity?: number;
  name: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private _productsService2: ProductStockService , 
  private fb:FormBuilder) { }
  products$!:Observable<Product[]>;
  errorMessage:string = '';

  form = this.fb.group({
    store:this.fb.group ({
      branch:['', [Validators.required,StockValidators.checkBranch]] ,
      code:['', Validators.required] , 
    }),
  //selector: this.createStock({}),
  stock:this.fb.array([
    this.createStock({product_id:1,quantity:10, name:'test'}),
    this.createStock({product_id:2,quantity:20, name:'test'}),
  ])

  });

  createStock(stock:Stock){
    return this.fb.group({
      product_id: stock.product_id,
      quantity: stock.quantity || 10,
      name: stock.name || ''
    });
  }

  ngOnInit(): void {
    this.getProducts();

    /*this.form.get('stock').valueChanges.subscribe(stock => {
      console.log(stock);
    });*/    
  }
  
  getProducts():Observable<Product[]>{
    return this._productsService2.getProducts().pipe(
      catchError(error => {
        this.errorMessage = error;
        return throwError(error);
      })
    );
  }

    addStock(value:Product){
      const control = this.form.get('stock') as FormArray;
      let stock = {
        product_id:value.productId,
        quantity:undefined, //this.form.get('selector')?.value.quantity,
        name:value.productName
      }
      control.push(this.createStock(stock));
    }

    removeStock({group,index}:{group:FormGroup,index:number}){
      const control = this.form.get('stock') as FormArray;
      control.removeAt(index);
      console.log(group, index) 
    }
  
    onSubmit(){
      console.log("submit", this.form.value);
    }
}
