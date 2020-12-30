import {  Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { teacher, TEACHER } from '../../interface/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements AfterViewInit {

  tableColumns: string[] = ["name","divCause","divResult","lectureNum",'lastdate','student','point','delete'];
  tableData: MatTableDataSource<teacher>;
  constructor(
    public router : Router

  ) {
    this.tableData = new MatTableDataSource(TEACHER);

   }
  ngAfterViewInit(): void {

  }
  Detail(){
    this.router.navigate(['/techerDetail/']);
  }
} 
