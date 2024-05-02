import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../../models/icategory';
import { ProductsListComponent } from '../products-list/products-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [CommonModule, FormsModule,  ProductsListComponent],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.scss'
})

export class OrderMasterComponent implements OnInit {
  catList: ICategory[];
  selectedCatId:number = 0;
  orderTotalPrice: number = 0;
  // prdList: IProduct[]=;

  constructor(){
    this.catList = [
      {id:0, name:'all'},
      {id:1, name:'laptop'},
      {id:2, name:'mobile'},
      {id:3, name:'tab'}
    ];
  }

  ngOnInit(): void {
    // this.getTotalPrice();
  }



  // buy(price: number, count:any){
  //   this.orderTotalPrice = price * count ;
  // }

  onTotalPriceChanged(totalPrice:number){
    this.orderTotalPrice = totalPrice ;
  }
}
