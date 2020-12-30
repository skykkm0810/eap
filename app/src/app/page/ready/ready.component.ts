import {  Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ready,READY } from '../../interface/interface';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements AfterViewInit {
  readyColumns: string[] = ["name","divCause","divResult","date","ready","delete"];
  readyData: MatTableDataSource<ready>;
  constructor() {
    this.readyData = new MatTableDataSource(READY);

   }

  ngAfterViewInit(): void {

  }

}
