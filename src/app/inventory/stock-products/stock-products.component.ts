import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.css']
})
export class StockProductsComponent implements OnInit {
  @Input()
  parent!:FormGroup; // parent form group

  @Output()
  removed = new EventEmitter<any>();
  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  remove(group:AbstractControl, index:number){
    this.removed.emit({group, index});
  }
}