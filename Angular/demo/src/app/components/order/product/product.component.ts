import { StaticProductsService } from './../../../services/static-products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IProduct } from '../../../models/iproduct';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  prdID:number = 0 ;
  prd:IProduct | null = null;
  prdIDs:number[] =[];
  constructor(private activatedRouter:ActivatedRoute, private router: Router, private prdService: StaticProductsService, private location: Location){
  }

  ngOnInit(): void {
    // this.prdID = this.activatedRouter.snapshot.params['id'];
    this.activatedRouter.paramMap.subscribe((p)=>{
      this.prdID = Number(p.get('id'));
      this.prd = this.prdService.getProductByID(this.prdID);
    });
    this.prdIDs = this.prdService.getProductsIDs();
  }

  goBack(){
    this.location.back();
  }

  previous(){
    let currentIndex = this.prdIDs.findIndex((ele)=> ele == this.prdID);
    let perviousID;
    if(currentIndex > 0)
      perviousID = this.prdIDs[currentIndex-1];
    else
      perviousID = this.prdIDs[this.prdIDs.length-1];
    
    this.router.navigate(['/products',perviousID]);
  }

  next(){
    let currentIndex = this.prdIDs.findIndex((ele)=> ele == this.prdID);
    let nextID;
    if(currentIndex == this.prdIDs.length-1)
      nextID = this.prdIDs[0];
    else
      nextID = this.prdIDs[currentIndex+1];
    
    this.router.navigate(['/products',nextID]);
  }
}
