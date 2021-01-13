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
  @ViewChild('sort') sort:MatSort;
  @ViewChild('paginator') paginator:MatPaginator;
  constructor() {
    this.readyData = new MatTableDataSource(READY);

   }

  ngAfterViewInit(): void {
    this.readyData.sort = this.sort
    this.readyData.paginator = this.paginator
  }
  clearTable(obj) {
    var index = this.readyData.data.indexOf(obj);
    this.readyData.data.splice(index,1)
    this.readyData = new MatTableDataSource<ready>(READY);
  }
}
