import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AddCollectionComponent} from "./components/add-collection/add-collection.component";
import {MyCollectionComponent} from "./components/my-collection/my-collection.component";
import {CollectionPageComponent} from "./components/collection-page/collection-page.component";
import {AddItemComponent} from "./components/add-item/add-item.component";

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'addCollection',component:AddCollectionComponent},

  {path:'myCollection',component:MyCollectionComponent},
  {path:'myCollection/collectionPage/:id',component:CollectionPageComponent},
  {path:'myCollection/collectionPage/AddItem/:id',component:AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
