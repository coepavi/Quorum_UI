import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-v-asset',
  templateUrl: './v-asset.component.html',
  styleUrls: ['./v-asset.component.css']
})
export class VAssetComponent implements OnInit {
  
  Trade: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

   ngOnInit() {
    this.listTrades()
    }

  // Get employees list
  listTrades() {
    return this.restApi.getAllTrades().subscribe((data: {}) => {
      console.log(data);
      this.Trade = data;
    })
    }
  

}
