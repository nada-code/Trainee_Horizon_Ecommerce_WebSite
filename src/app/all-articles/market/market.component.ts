import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  buttontxt!:string;
  ngOnInit(): void {
    this.buttontxt='Order';

  }

}
