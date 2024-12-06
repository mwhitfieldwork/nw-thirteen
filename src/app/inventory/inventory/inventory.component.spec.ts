import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryComponent } from './inventory.component';
import { ProductStockService } from 'src/app/services/product-stock.service';
import { DebugElement } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

let productService: ProductStockService;
let el: DebugElement;

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;
  let productService: ProductStockService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryComponent ],
      providers: [
        FormBuilder,
        ProductStockService,
        HttpClientTestingModule,
      ]
    })
    .compileComponents()

    productService = TestBed.inject(ProductStockService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should H1 with text', () => {
    const spy = spyOn(component, 'createStock');
    component.createStock({product_id:1,quantity:10, name:'First item'});
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith({product_id:1,quantity:10, name:'First item'});
  });


});
