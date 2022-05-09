import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/Model/Categorie';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  isVisible: boolean = false;
  add: boolean = false;
  categorieName !: string;
  

  constructor() {
  }

  ngOnInit(): void {
  
  }

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
    this.add = false;
  }

  

  new() {
    this.add = true;
  }

  nomCategorieEvent(event : string){
    this.categorieName = event; 
  }
}
