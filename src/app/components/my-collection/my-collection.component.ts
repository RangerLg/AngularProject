import { Component, OnInit } from '@angular/core';
import {CollectionsService} from "../../service/Collections.service";
import {Collection} from "../../Models/Collection";

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  columns = ['id','author','title','price','button']
  myCollections:Collection[]= [];
  constructor(private cs:CollectionsService) { }

  ngOnInit(): void {
    this.cs.getUserCollection().subscribe(res=>{
      this.myCollections= res;
    })

  }

}
