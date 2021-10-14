import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../service/items.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  id:number=0;
  private subscription: Subscription;
  constructor(private is:ItemsService,private activateRoute: ActivatedRoute) {
    this.subscription=activateRoute.params.subscribe(params=>this.id=params['id'])
  }
  ngOnInit(): void {
  }

  AddItem(AddItem:string){
    this.is.AddNewItem(this.id,AddItem).subscribe(res=>{
      alert("ok")
    },error => {
      alert("Error")
    })
  }
}
