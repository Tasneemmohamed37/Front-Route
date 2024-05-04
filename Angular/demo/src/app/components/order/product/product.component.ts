import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  prdID:number = 0 ;
  constructor(private activatedRouter:ActivatedRoute){
  }

  ngOnInit(): void {
    this.prdID = this.activatedRouter.snapshot.params['id'];
  }


}
