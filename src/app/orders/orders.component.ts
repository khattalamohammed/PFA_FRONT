import { Component, OnInit,ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { OperationComponent } from '../operation/operation.component';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  show: boolean = false;
  constructor() {
  }

  ngOnInit(): void {}

}
