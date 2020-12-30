import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TecherDetailComponent } from '../../page/techer-detail/techer-detail.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { student, STUDENTSLIST} from '../../interface/interface';
@Component({
  selector: 'app-teachers-lecture',
  templateUrl: './teachers-lecture.component.html',
  styleUrls: ['./teachers-lecture.component.css']
})
export class TeachersLectureComponent implements AfterViewInit {
  tableColumns: string[] = ["name","belong","enrollDate","condition","cancel"];
  tableData: MatTableDataSource<student>;
  constructor(
    private dialogRef: MatDialogRef<TecherDetailComponent>
  ) {
    this.tableData = new MatTableDataSource(STUDENTSLIST);
   }
   @ViewChild('pagnator') paginator: MatPaginator;
   @ViewChild('sort') sort: MatSort;
  
  ngAfterViewInit(): void {
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
   
  }
}





