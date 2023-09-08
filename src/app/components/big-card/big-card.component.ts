import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover:String = "";

  @Input()
  cardTitle:String = "";

  @Input()
  cardDescription:String = "";

  @Input()
  id:String = "0";

  constructor(){}

}
