import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoriesComponent } from './categories/categories.component';
import { FamillesComponent } from './familles/familles.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RegisterComponent } from './register/register.component';
import { PlantesComponent } from './plantes/plantes.component'; 
import { EditPlantComponent } from './edit-plant/edit-plant.component';

const routes: Routes = [
  { path: 'add', component: AddPlantComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'familles', component: FamillesComponent },
  { path: '', component: LoginComponent },
  { path: 'edit', component: EditProfileComponent },
  { path: 'signup', component: RegisterComponent },
  { path : 'plantes', component : PlantesComponent}, 
  { path : 'edit-plant', component : EditPlantComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
