import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  @Input()
  type:string='';
  @Input()
  operation:string='';
  @Input()
  show:any;
  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
    this.show=false;
  }
}
