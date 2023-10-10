import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover : string = ""
  @Input()
  cardTitle : string = ""
  @Input()
  cardDescription : string = ""
  @Input()
  Id : string = "0"

  private id : string | null = "0"

  constructor(){}

  ngOnInit() : void {}

}
