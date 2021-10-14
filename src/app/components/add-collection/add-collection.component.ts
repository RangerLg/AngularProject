import { Component, OnInit } from '@angular/core';
import {CollectionsService} from "../../service/Collections.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.scss']
})
export class AddCollectionComponent implements OnInit {

  constructor(private cs: CollectionsService, private router:Router) {
  }

  ngOnInit(): void {
  }

  AddCollections(Topic: string, CollectionName: string, Description: string) {
    this.cs.addCollections(Topic,CollectionName,Description).subscribe(res=>{
      alert('ok')
    },error => {alert("Error")})
  }

}
