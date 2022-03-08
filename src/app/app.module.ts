import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-rooting.module';
//importe firebase module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListeComponent } from './article-liste/article-liste.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { BooksComponent } from './all-articles/books/books.component';
import { MusicComponent } from './all-articles/music/music.component';
import { HealthComponent } from './all-articles/health/health.component';
import { BabyComponent } from './all-articles/baby/baby.component';
import { MarketComponent } from './all-articles/market/market.component';
import { OfficeComponent } from './all-articles/office/office.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ArticleComponent,
    ArticleListeComponent,
    Article2Component,
    Article3Component,
    ArticleDetailsComponent,
    AllArticlesComponent,
    BooksComponent,
    MusicComponent,
    HealthComponent,
    BabyComponent,
    MarketComponent,
    OfficeComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AppRoutingModule





  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
