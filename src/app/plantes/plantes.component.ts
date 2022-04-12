import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantes',
  templateUrl: './plantes.component.html',
  styleUrls: ['./plantes.component.css']
})
export class PlantesComponent implements OnInit {

  isVisible: boolean = false;
  add: boolean = false;

  constructor(private route: Router) { }

  ngOnInit(){

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

  moveToPlant(){
    this.route.navigate(['edit-plant']);
  }

  edit(){
    this.route.navigate(['edit-plant']);
  }

  addPlant(){
    this.route.navigate(['add']);
  }

}
