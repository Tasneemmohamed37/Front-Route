import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, input } from '@angular/core';
import { IProduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { StaticProductsService } from '../../../services/static-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit, OnChanges {
  prdListOfCategory: IProduct[]=[];
  orderTotalPrice: number = 0;
  @Input() sendCategoryID:number=0;
  @Output() totalPriceEvent: EventEmitter<number>; 


  constructor(private router: Router, private staticPrdsServiece: StaticProductsService){
    this.totalPriceEvent  = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.filterProductsByCatID();
  }
  
  ngOnChanges(): void {
    this.filterProductsByCatID();
  }

  buy(price: number, count:any){
    this.orderTotalPrice = price * count ;
    this.totalPriceEvent.emit(this.orderTotalPrice);
  }

  prdTrackByFunc(index:number, prd:IProduct):number
  {
    return prd.id ;
  }

  private filterProductsByCatID(){
    if(this.sendCategoryID == 0)
      this.prdListOfCategory = this.staticPrdsServiece.getAllProducts();
    else
      this.prdListOfCategory = this.staticPrdsServiece.getProductsByCategoryID(this.sendCategoryID);
  }

  prdDetails(prdId:number){
    this.router.navigate(['/products',prdId]);
  }
}
