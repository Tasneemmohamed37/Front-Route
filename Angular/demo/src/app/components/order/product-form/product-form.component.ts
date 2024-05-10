import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../models/iproduct';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { ICategory } from '../../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {
  catList: ICategory[];
  newPrd: IProduct= {} as IProduct;

  constructor(
    private prdService: ProductsService,
    private router: Router) 
    {
      this.catList=[
        {id:1, name:'Laptops'},
        {id:2, name:'Tablets'},
        {id:3, name:'Mobiles'}
      ];
    }

  ngOnInit(): void {
  }

  addProduct() {
    const prd: IProduct = {
      id: 100,
      name: 'New Tablet',
      price: 100,
      quantity: 10,
      categoryID: 2,
      imgUrl: ''
    }

    this.prdService.addProduct(prd).subscribe((prd) => {
      alert("Product added Successfuly"); // not recommended
      // Use instead Toast (snackbar: https://material.angular.io/components/snack-bar/overview), BS Alert,...
      this.router.navigateByUrl('/products');
    })

    const observer={
      next: (prd:IProduct) => {
        alert("Product added Successfully"); // not recommended
        // Use instead Toast (snackbar: https://material.angular.io/components/snack-bar/overview), BS Alert,...
        this.router.navigateByUrl('/Products');
      },
      error: (err:Error)=>{alert(err.message)}
    }

    // this.prdService.addProduct(this.newPrd).subscribe(observer);
  }

}
