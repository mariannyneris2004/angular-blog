import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photoCover: string = "";
  cardTitle: string = "";
  cardDescription: string = "";
  Id: string | null = "0";

  articles = data; // Supondo que data seja um array com os artigos

  constructor() {}

  ngOnInit(): void {
    if (this.articles.length > 0) {
      const firstArticle = this.articles[0];
      this.setValuesToComponent(firstArticle.id);
    }
  }

  setValuesToComponent(Id: string | null) {
    const result = this.articles.find(article => article.id === Id);

    if (result) {
      this.photoCover = result.photo;
      this.cardTitle = result.title;
      this.cardDescription = result.description;
    }
  }
}
