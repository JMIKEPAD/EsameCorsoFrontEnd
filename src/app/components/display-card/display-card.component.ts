import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Beer } from '../../models/beer';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {


  beers:any;
  ingredients:any

  constructor( private api: ApiService) { }

  ngOnInit(): void {
    this.getInfoBeers()
  }
  getInfoBeers(){
    this.beers=this.api.getAllBeers().subscribe(b=>{
      this.beers=b
    })
  }

}
