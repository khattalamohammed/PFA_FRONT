import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  isVisible : boolean = false; 
  add : boolean = false; 
  typeName : string = ""; 
  
  constructor() { }

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

  nomTypeEvent(event : string){
    this.typeName = event;   
  }

}
