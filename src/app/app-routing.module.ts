import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'',component:HeaderComponent}, 
  {path:'add', component : AddPlantComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
