import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  buttontxt!:string;
  ngOnInit(): void {
    this.buttontxt='Order';

  }

}
