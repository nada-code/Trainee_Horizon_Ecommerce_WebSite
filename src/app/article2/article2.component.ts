import { Component,Input, OnInit } from '@angular/core';
import { Article } from 'models/article.model';
import { ArticleService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article2',
  templateUrl: './article2.component.html',
  styleUrls: ['./article2.component.scss']
})
export class Article2Component implements OnInit {
  title!: string;
  description!: string;
  image!: string;
  buttontxt!:string;
  prix!:string;

    ngOnInit(): void {
      this.title='article';
      this.image='https://electrotounes.tn/221-large_default/telephone-portable-nokia-220-4g.jpg'
      this.description='hjjjjjjjjjjjjjjjjjj';
      this.prix='500'
      this.buttontxt='Order';
      this.title='article';
      this.image='https://electrotounes.tn/221-large_default/telephone-portable-nokia-220-4g.jpg'
      this.description='hjjjjjjjjjjjjjjjjjj';
      this.prix='500'
      this.buttontxt='Order';
    }

  }
