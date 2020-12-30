import {  Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { student, STUDENTSLIST } from '../../interface/interface';
export interface cur {
  date: string;
  one? : string;
  two? : string;
  three? : string;
}
export const READY : cur[] = [
  {date: '2020-12-6-10:00'},
  {date: '2020-12-6-10:00'},
  {date: '2020-12-6-10:00'},
]
@Component({
  selector: 'app-lecture-detail',
  templateUrl: './lecture-detail.component.html',
  styleUrls: ['./lecture-detail.component.css']
})
export class LectureDetailComponent implements AfterViewInit {
  
  table2Columns: string[] = ["date","one","two","three"];
  table2Data: MatTableDataSource<cur>;

  tableColumns: string[] = ["name","belong","enrollDate","condition",'delete'];
  tableData: MatTableDataSource<student>;
  @ViewChild('pagnator') paginator: MatPaginator;
  @ViewChild('sort') sort: MatSort;
  @ViewChild('pagnator2') paginator2: MatPaginator;
  @ViewChild('sort2') sort2: MatSort;
  constructor(

  ) {
    this.tableData = new MatTableDataSource(STUDENTSLIST);
    this.table2Data = new MatTableDataSource(READY);

   }
  ngAfterViewInit(): void {
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
    this.table2Data.paginator = this.paginator2;
    this.table2Data.sort = this.sort2;
  }
  
}