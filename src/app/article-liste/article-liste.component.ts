import { Component, OnInit } from '@angular/core';
import { Article } from 'models/article.model';
import { ArticleService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-liste',
  templateUrl: './article-liste.component.html',
  styleUrls: ['./article-liste.component.scss']
})
export class ArticleListeComponent implements OnInit {
  liste_article!:Article[];
  constructor(private articleService: ArticleService) { }
  ngOnInit():void{
  this.liste_article = this.articleService.getAllArticle();
  }

}
