import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  buttontxt!:string;
  ngOnInit(): void {
    this.buttontxt='Order';

  }
}
