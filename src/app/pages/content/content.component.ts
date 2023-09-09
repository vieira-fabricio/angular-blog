import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/components/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  photoCover:String = "";
  contentTitle:String = "";
  contentDescription:String = "";
  content:String = "";
  content2:String | undefined = "";
  private id:String | null = "0";

  constructor(private route:ActivatedRoute){
    
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe( value =>
        this.id = value.get("id")  
      )
      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:String | null) {
    const result = dataFake.filter(
                  article => article.id == id
    )[0]
    
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    this.content = result.content;
    this.content2 = result.content2;
  }

}
