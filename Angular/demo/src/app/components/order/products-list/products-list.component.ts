import { Component } from '@angular/core';
import { IProduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  prdList: IProduct[];
  orderTotalPrice: number = 0;

  constructor(){
    this.prdList = [
      { id:1, name:'dell laptop', price: 230, quantity: 3, imgUrl:'https://picsum.photos/100/50', categoryID:1},
      { id:2, name:'apple macBook laptop', price: 300, quantity: 0, imgUrl:'https://picsum.photos/100/50', categoryID:1},
      { id:3, name:'samsung mobile', price: 150, quantity: 2, imgUrl:'https://picsum.photos/100/50', categoryID:2},
      { id:4, name:'samsung mobile2', price: 150, quantity: 2, imgUrl:'https://picsum.photos/100/50', categoryID:2},
      { id:5, name:'samsung tab', price: 150, quantity: 2, imgUrl:'https://picsum.photos/100/50', categoryID:3},
      { id:6, name:'samsung tab2', price: 150, quantity: 2, imgUrl:'https://picsum.photos/100/50', categoryID:3},
    ]
  }

  buy(price: number, count:any){
    this.orderTotalPrice = price * count ;
  }
}
