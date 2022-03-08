import { Component,Input, OnInit } from '@angular/core';
import { Article } from 'models/article.model';
import { ArticleService } from 'src/app/services/articles.service';


@Component({
  selector:' app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article!:Article;
constructor(private articleService:ArticleService){}
buttontxt!:string

  ngOnInit(): void {
    this.buttontxt='Order';
  }

}
