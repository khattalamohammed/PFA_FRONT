import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Output()
  changeState: EventEmitter<boolean>=new EventEmitter();
  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  edit(): void {
    this.show = true;
  }
  cancel():void{
    this.show = false;
  }
}
