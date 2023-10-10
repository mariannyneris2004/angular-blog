import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  contentCover : string = ""
  contentTitle : string = ""
  contentText : string = ""
  private id : string | null = "0"

  constructor(
    private route:ActivatedRoute
  ){}

  setValuesToComponent(id : string | null){
    const result = data.filter(articule => articule.id == id)[0]

    this.contentCover = result.photo;
    this.contentTitle = result.title;
    this.contentText = result.description;
  }

  ngOnInit() : void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id"))

    this.setValuesToComponent(this.id)
  }

}
