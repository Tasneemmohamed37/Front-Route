import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, input } from '@angular/core';
import { IProduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { StaticProductsService } from '../../../services/static-products.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterOutlet, RouterLink, RouterLinkActive ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit, OnChanges {
  prdListOfCategory: IProduct[]=[];
  orderTotalPrice: number = 0;
  @Input() sendCategoryID:number=0;
  @Output() totalPriceEvent: EventEmitter<number>; 


  constructor(private router: Router, private prdService:ProductsService){
    this.totalPriceEvent  = new EventEmitter<number>();
  }


  ngOnInit(): void {
    this.prdService.getProductsByCategoryId(this.sendCategoryID).subscribe(products => {this.prdListOfCategory = products});
  }
  
  ngOnChanges(): void {
    this.prdService.getProductsByCategoryId(this.sendCategoryID).subscribe(products => {this.prdListOfCategory = products});
  }

  buy(price: number, count:any){
    this.orderTotalPrice = price * count ;
    this.totalPriceEvent.emit(this.orderTotalPrice);
  }

  prdTrackByFunc(index:number, prd:IProduct):number
  {
    return prd.id ;
  }

  

  prdDetails(prdId:number){
    this.router.navigate(['/products',prdId]);
  }
}
