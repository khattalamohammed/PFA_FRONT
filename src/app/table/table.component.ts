import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Output()
  changeState: EventEmitter<boolean> = new EventEmitter();
  @Output()
  changeState2: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  edit(): void {
    this.changeState.emit();
  }
  add() {
    this.changeState2.emit();
  }

  
}
