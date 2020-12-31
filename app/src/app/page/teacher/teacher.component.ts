import {  Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { teacher, TEACHER } from '../../interface/interface';
import { Router } from '@angular/router';
import { ExportService } from '../../service/export.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements AfterViewInit {

  tableColumns: string[] = ["name","divCause","divResult","lectureNum",'lastdate','student','point','delete'];
  tableData: MatTableDataSource<teacher>;
  constructor(
    public router : Router,
    private ext : ExportService
  ) {
    this.tableData = new MatTableDataSource(TEACHER);

   }
  ngAfterViewInit(): void {

  }
  Detail(){
    this.router.navigate(['/techerDetail/']);
  }
  Enroll(){
    this.router.navigate(['/teacherEnroll/']);
  }
  clearTable(obj) {
    var index = this.tableData.data.indexOf(obj);
    this.tableData.data.splice(index,1)
    this.tableData = new MatTableDataSource<teacher>(TEACHER);
  }
  export() {
    this.ext.exportExcel( 'teacherList', 'teacherList' );
  }
} 
