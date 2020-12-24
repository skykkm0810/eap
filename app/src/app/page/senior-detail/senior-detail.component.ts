import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {REQUESTS , Request} from '../../interface/interface';
import {EMERGENCY , Emergency} from '../../interface/interface';


@Component({
  selector: 'app-senior-detail',
  templateUrl: './senior-detail.component.html',
  styleUrls: ['./senior-detail.component.css']
})
export class SeniorDetailComponent implements AfterViewInit {
  requestColumns: string[] = ["id","progress","from","desc"];
  requestData: MatTableDataSource<Request>;
  emergencyColumns: string[] = ["date","situation","process","add"];
  emergencyData: MatTableDataSource<Emergency>;
  @ViewChild('pagnator1') paginator1: MatPaginator;
  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('pagnator2') paginator2: MatPaginator;
  @ViewChild('sort2') sort2: MatSort;
  constructor() {
    this.requestData = new MatTableDataSource(REQUESTS);
    this.emergencyData = new MatTableDataSource(EMERGENCY);
    
  }

  ngAfterViewInit(): void {
    this.requestData.paginator = this.paginator1;
    this.requestData.sort = this.sort1;
    this.emergencyData.paginator = this.paginator2;
    this.emergencyData.sort = this.sort2;
    


  }

}
