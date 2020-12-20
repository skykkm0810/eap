import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device, DEVICES } from '../../interface/interface';
import { Senior, SENIORS } from '../../interface/interface';
import { Request, REQUESTS } from '../../interface/interface';

@Component({
  selector: 'app-center-a',
  templateUrl: './center-a.component.html',
  styleUrls: ['./center-a.component.css']
})
export class CenterAComponent implements AfterViewInit {

  requestDisplayedColumns: string[] = [ 'id', 'progress', 'from', 'desc', 'who' ];
  requestDataSource: MatTableDataSource<Request>;
  seniorDisplayedColumns: string[] = [ 'id', 'name', 'gender', 'age', 'desc', 'latest' ];
  seniorDataSource: MatTableDataSource<Senior>;
  deviceDisplayedColumns: string[] = [ 'id', 'type', 'name', 'location', 'status' ];
  deviceDataSource: MatTableDataSource<Device>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.requestDataSource = new MatTableDataSource(REQUESTS);
    this.seniorDataSource = new MatTableDataSource(SENIORS);
    this.deviceDataSource = new MatTableDataSource(DEVICES);
  }

  ngAfterViewInit(): void {
    this.deviceDataSource.paginator = this.paginator;
    this.deviceDataSource.sort = this.sort;
  }

}
