import {  Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { worker, WORKERLIST } from '../../interface/interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements AfterViewInit {
  tableColumns: string[] = ["name","belong","part","gender",'age','workLocation','TotalUsePoint','remainPoint','studyNum','interest','dateIn'];
  tableData: MatTableDataSource<worker>;
  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator
  constructor(
    public router : Router

  ) {
    this.tableData = new MatTableDataSource(WORKERLIST);

   }

  
  ngAfterViewInit(): void {
    this.tableData.sort = this.sort
    this.tableData.paginator = this.paginator
  }
  Detail(){
    this.router.navigate(['/customerDetail/']);
  }
}
