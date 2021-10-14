import { Component, OnInit } from '@angular/core';
import {Collection} from "../../Models/Collection";
import {CollectionsService} from "../../service/Collections.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent  {

  books:Collection[]=[];
  columns = ['id','author','title','price']
  constructor(private  bs:CollectionsService) { }



}
