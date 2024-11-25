import { OrderDetails } from "./orderDetails";


export interface Product {
    category: any;
    categoryId: number;
    discontinued: boolean;
    orderDetails: OrderDetails[];
    productId: number;
    productName: string;
    quantityPerUnit: string;
    reorderLevel: number;
    supplier:  any;
    supplierId: number;
    unitPrice: number;
    unitsInStock: number;
    unitsOnOrder: number;
    isDeleted:boolean;
    rating:number;
}