import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss']
})
export class BabyComponent implements OnInit {

  buttontxt!:string;
  ngOnInit(): void {
    this.buttontxt='Order';

  }

}
