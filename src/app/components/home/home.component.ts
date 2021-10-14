import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/Models/Collection';
import {CollectionsService} from "../../service/Collections.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collections:Collection[]=[];
  columns = ['id','author','title','price']
  constructor(private  bs:CollectionsService) { }

  ngOnInit(): void {
    this.bs.getAllCollections().subscribe(res=>{
      this.collections=res
    })
  }

  AddCollection(Topic:string,CollectionName:string,Description:string){
    this.bs.addCollections(Topic,CollectionName,Description).subscribe(res=>{
      alert("Collection was added")
    },
      error => {
      alert("Collection wasn't added")
      })
  }
}
