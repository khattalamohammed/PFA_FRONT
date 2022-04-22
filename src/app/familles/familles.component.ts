import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-familles',
  templateUrl: './familles.component.html',
  styleUrls: ['./familles.component.css']
})
export class FamillesComponent implements OnInit {

  isVisible: boolean = false;
  add: boolean = false;
  constructor(private route :  Router) {}

  ngOnInit(): void {}
  hide() {
    this.isVisible = false;
    this.add = false;
  }
  new() {
    this.add = true;
  }

  moveToPlants(){
    this.route.navigate(['plantes']); 
  }
}
