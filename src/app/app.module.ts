import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoriesComponent } from './categories/categories.component';
import { TableComponent } from './table/table.component';
import { OperationComponent } from './operation/operation.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatListModule } from '@angular/material/list'; 
import { MatBadgeModule } from '@angular/material/badge'; 
import { FamillesComponent } from './familles/familles.component';
import { PlantesComponent } from './plantes/plantes.component';
import { EditPlantComponent } from './edit-plant/edit-plant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlantsService } from './plants.service';
import { TypeComponent } from './type/type.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    CategoriesComponent,
    TableComponent,
    OperationComponent,
    HeaderComponent,
    LoginComponent,
    AddPlantComponent,
    FamillesComponent,
    PlantesComponent,
    EditPlantComponent,
    TypeComponent, 
    RegisterComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,  
    MatBadgeModule, 
    ReactiveFormsModule,
    HttpClientModule, 
  ],
  providers: [ PlantsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
