import { Injectable } from "@angular/core";
import { Article } from "models/article.model";


@Injectable({
    providedIn: 'root'
  })
export class ArticleService{
    liste_article: Article[] = [
        {
            id:1,
            title:'Apple MacBook Pro 14',
            description:'New Apple MacBook Pro 14” and 16”: redesigned design, notched mini-LED screen and increased performance.',
            imageURL:'https://fr.shopping.rakuten.com/photo/1172501232_ML_NOPAD.jpg',
            Prix:'4200 DN'

        },
        {
          id:2,
          title:'Ordinateur Portable Lenovo ',
          description:'Ordinateur Portable Lenovo ThinkPad E15 i7 10è Gén 16Go 1To - Noir Référence 20RD001SFE-16G | No !',
          imageURL:'https://tdiscount.tn/40012-large_default/ordinateur-portable-lenovo-thinkpad-e15-i7-10e-gen-16go-1to-noir.jpg',
          Prix:'2 669,00 TND'

      }




            ];



          getAllArticle(): Article[] {
            return this.liste_article;
        } }
