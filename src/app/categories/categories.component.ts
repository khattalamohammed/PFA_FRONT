import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  isVisible: boolean = false;
  add: boolean = false;
  constructor() {}

  ngOnInit(): void {}
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
}
