import {  Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { studyinfo, STUDYINFO } from '../../interface/interface';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements AfterViewInit {
  tableColumns: string[] = ["date","point","title","name",'condition','good'];
  tableData: MatTableDataSource<studyinfo>;
  constructor(
    ) {
      this.tableData = new MatTableDataSource(STUDYINFO);
     }
  
  @ViewChild('pagnator') paginator: MatPaginator;
  @ViewChild('sort') sort: MatSort;
  
  ngAfterViewInit(): void {
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
  }
}


