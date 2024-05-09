import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreData } from '../../models/store-data';
import { CommonModule } from '@angular/common';
import { PromotionAdsService } from '../../services/promotion-ads.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit, OnDestroy{

  storeData: StoreData;
  private adSubscription !:Subscription;
  constructor(private adsService:PromotionAdsService){
    this.storeData = new StoreData("ITI store","https://picsum.photos/350/300",["Cairo","Smart"]);
  }
  

  ngOnInit(): void {
          this.adSubscription = this.adsService.getScheduledAds(3).subscribe({
          next:(data:string)=>{console.log(data);},
          error:(e:string)=>{console.log(e);},
          complete:()=>{console.log("ad finished!");}
        });
    }
  
    ngOnDestroy(): void {
      this.adSubscription.unsubscribe();
    }
  }




