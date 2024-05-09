import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {

  private adsList: string[];

  constructor() { 
    this.adsList = ["sale up to 50%", "black friday sales!", "big discounts", "", "special offer"]
  }

  getScheduledAds(intervalInSeconds:number) : Observable<string>{
    return new Observable<string>((observer)=>{
      let counter = 0;

      let adsTimer = setInterval(()=>{

        if(counter == this.adsList.length){
          observer.complete();
        }

        if(this.adsList[counter] == ''){
          observer.error("Error: Empty ad")
        }
        observer.next(this.adsList[counter]);
        counter++;

      },intervalInSeconds*1000)
      
      return {
        unsubscribe() {
          // called when -> [error | complete | call it]
          clearInterval(adsTimer);
          console.log('observable unsubscribe!!');
        },
      }
    });
  }

}
