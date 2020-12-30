import {  Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { student, STUDENTSLIST } from '../../interface/interface';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements AfterViewInit {
  tableColumns: string[] = ["name","belong","enrollDate","condition",'delete'];
  tableData: MatTableDataSource<student>;
  constructor(
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


