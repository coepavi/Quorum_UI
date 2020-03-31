import { RestApiService } from "../shared/rest-api.service";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-t-search',
  templateUrl: './t-search.component.html',
  styleUrls: ['./t-search.component.css']
})
export class TSearchComponent implements OnInit {
  tradeData: any = [];
  temp=false;
  temp1=false;
  validData=false;
  
  @Input() tradeDetails = { tradeid:'', FromParty: '' }

  constructor(
    public restApi: RestApiService,
    private http: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {}

  findTrade() {
    {
      console.log(this.tradeDetails.tradeid)
      console.log(this.tradeDetails.FromParty)
      this.restApi.getTrade(this.tradeDetails.tradeid).subscribe(data => {
        this.tradeData = data;
        if (!((this.tradeData[1] == this.tradeDetails.FromParty) || (this.tradeData[2] == this.tradeDetails.FromParty)) && (this.tradeData[6] == true))
        {
          alert("You are not authorised to view this trade: " + this.tradeData[0])
          this.validData = true;
          window.location.reload();  
        }
        console.log("Type:", typeof(this.tradeData))
        console.log(this.tradeData)
	    if(this.tradeData[6] == true)
        {
         if (this.validData == false)
         {
          this.temp1=false;
          this.temp=true;
         }
        }
        else {
          this.temp1=true;
          this.temp=false;
        }
      })
    }
  }

}
