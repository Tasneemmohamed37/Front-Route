import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root' //apply singleton design pattern on service  
})
export class StaticProductsService {
  private prdList: IProduct[];

  constructor() {

    this.prdList = [
      { id:1, name:'dell laptop', price: 230, quantity: 3, imgUrl:'https://picsum.photos/100/50', categoryID:1},
      { id:2, name:'apple macBook laptop', price: 300, quantity: 0, imgUrl:'https://picsum.photos/100/50', categoryID:1},
      { id:3, name:'samsung mobile', price: 150, quantity: 2, imgUrl:'https://picsum.photos/100/50', categoryID:2},
      { id:4, name:'samsung mobile2', price: 150, quantity: 1, imgUrl:'https://picsum.photos/100/50', categoryID:2},
      { id:5, name:'samsung tab', price: 150, quantity: 2, imgUrl:'https://picsum.photos/100/50', categoryID:3},
      { id:6, name:'samsung tab2', price: 150, quantity: 2, imgUrl:'https://picsum.photos/100/50', categoryID:3},
    ];

  }

  // CRUD

  getAllProducts(): IProduct[]{
    return this.prdList;
  }

  getProductsByCategoryID(categoryID:number):IProduct[]{
    return this.prdList.filter(prd => prd.categoryID == categoryID);
  }

  getProductByID(prdID:number):IProduct | null
  {
    let prd = this.prdList.find(p => p.id == prdID);
    return prd ? prd : null ;
  }

  getProductsIDs():number[]
  {
    let IDs = this.prdList.map(prd=> prd.id);
    return IDs;
  }
}
