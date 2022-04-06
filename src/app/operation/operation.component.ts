import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {
  @Input()
  type: string = '';
  @Input()
  operation: string = '';
  @Output()
  cancel: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  hide() {
    this.cancel.emit();
  }
}
