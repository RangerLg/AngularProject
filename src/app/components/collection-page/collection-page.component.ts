import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../service/items.service";
import {Item} from "../../Models/item";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {

  id:number=0;
  items:Item[] = [];
  columns:string[]=["idItem","idCollection","nameItem"]
  private subscription: Subscription;
  constructor(private is:ItemsService,private activateRoute: ActivatedRoute) {
    this.subscription=activateRoute.params.subscribe(params=>this.id=params['id'])
  }

  ngOnInit(): void {
    this.is.GetItemFromCollection(this.id).subscribe(res=>{
      this.items=res;
    },error => {
      alert("error")
    })
  }


}
