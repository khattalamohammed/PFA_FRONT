import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-familles',
  templateUrl: './familles.component.html',
  styleUrls: ['./familles.component.css']
})
export class FamillesComponent implements OnInit {

  isVisible: boolean = false;
  add: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  hide() {
    this.isVisible = false;
    this.add = false;
  }
  new() {
    this.add = true;
  }
}
