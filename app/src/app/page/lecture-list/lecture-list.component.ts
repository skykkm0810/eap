import {  Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { lecturelist, LECTURELIST } from '../../interface/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent implements AfterViewInit {

  tableColumns: string[] = ["date","divCause","divResult","title",'name','point','good','number','delete'];
  tableData: MatTableDataSource<lecturelist>;
  constructor(
    public router : Router

  ) {
    this.tableData = new MatTableDataSource(LECTURELIST);

   }
  ngAfterViewInit(): void {

  }
  Detail(){
    this.router.navigate(['/lectureDetail/']);
  }
  clearTable(obj) {
    var index = this.tableData.data.indexOf(obj);
    this.tableData.data.splice(index,1)
    this.tableData = new MatTableDataSource<lecturelist>(LECTURELIST);
  }
}