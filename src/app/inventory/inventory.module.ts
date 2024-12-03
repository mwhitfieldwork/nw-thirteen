import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StockBranchComponent } from './stock-branch/stock-branch.component';
import { StockSelectorComponent } from './stock-selector/stock-selector.component';
import { StockProductsComponent } from './stock-products/stock-products.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
const routes:Routes =[
  {path: 'restock', component:InventoryComponent}
]

@NgModule({
  declarations: [
    InventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ]
})
export class InventoryModule { }
