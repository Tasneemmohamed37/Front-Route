import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../../models/icategory';
import { ProductsListComponent } from '../products-list/products-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [CommonModule, FormsModule,  ProductsListComponent, HttpClientModule],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.scss'
})

export class OrderMasterComponent implements OnInit, AfterViewInit {
  catList: ICategory[];
  selectedCatId:number = 0;
  orderTotalPrice: number = 0;
  @ViewChild('divViewChild') clientNameDVC:any;

  constructor(){
    this.catList = [
      {id:0, name:'all'},
      {id:1, name:'laptop'},
      {id:2, name:'mobile'},
      {id:3, name:'tab'}
    ];
  }


  ngAfterViewInit(): void {
    // console.log(this.clientNameDVC.nativeElement.value = 'Enter Your Name: ');
  }

  ngOnInit(): void {
  }


  onTotalPriceChanged(totalPrice:number){
    this.orderTotalPrice = totalPrice ;
  }

}
