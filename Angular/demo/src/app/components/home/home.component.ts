import { Component } from '@angular/core';
import { StoreData } from '../../models/store-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  storeData: StoreData;
  constructor(){
    this.storeData = new StoreData("ITI store","https://picsum.photos/350/300",["Cairo","Smart"]);
  }
}
