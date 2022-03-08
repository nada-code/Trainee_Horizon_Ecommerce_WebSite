import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-article3',
  templateUrl: './article3.component.html',
  styleUrls: ['./article3.component.scss']
})

export class Article3Component implements OnInit {
  buttontxt!:string;
  ngOnInit(): void {
    this.buttontxt='Order';

  }


}
