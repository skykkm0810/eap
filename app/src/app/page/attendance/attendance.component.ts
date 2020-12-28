import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {Attendance , ATTENDANCE} from '../../interface/interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})

export class AttendanceComponent implements AfterViewInit {
  dataColumns: string[] = ["date", "attand", "strange","center"];
  dataSource: MatTableDataSource<Attendance>;
  constructor() { 
    this.dataSource = new MatTableDataSource(ATTENDANCE);
  }
  @ViewChild('pagnator') paginator: MatPaginator;
  @ViewChild('sort') sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  fuc(){
    location.href="./attendants";
  }

}
