import { RestApiService } from "../shared/rest-api.service";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-asset',
  templateUrl: './c-asset.component.html',
  styleUrls: ['./c-asset.component.css']
})
export class CAssetComponent implements OnInit {

  Trade: any = [];
  temp=false;
  @Input() tradeDetails = { TradeId:'', FromParty: '', ToParty: '', Amount: 0, TradeDate: 0, Status: '' }
  
  constructor(
    private http: HttpClient,
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() {}

  addTrade(dataTrade) {

    this.restApi.createTrade(this.tradeDetails).subscribe((data) => {
      console.log(data);
      if (data == 'Trade can not be done on same Bank')
      {
      alert('Trade can not be done on same Bank')
      }
      else if (data == 'Trade ID already exist. Please change trade ID') {
        this.temp=true
      }
      else {
      this.Trade = data;
      }
    },error => {
      alert(1)
      console.log(error)
    })
  }
}



