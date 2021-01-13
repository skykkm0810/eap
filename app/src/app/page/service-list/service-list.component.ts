import {  Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { customerService, CUSTOMERSERVICE } from '../../interface/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements AfterViewInit {
  tableColumns: string[] = ["id","kind","title","date",'name','contact','condition','delete'];
  tableData: MatTableDataSource<customerService>;
  @ViewChild(MatPaginator) paginator:MatPaginator
  @ViewChild(MatSort) sort:MatSort
  constructor(
    public router : Router

  ) {
    this.tableData = new MatTableDataSource(CUSTOMERSERVICE);

   }

  
  ngAfterViewInit(): void {
    this.tableData.sort = this.sort
    this.tableData.paginator = this.paginator
  }
  Detail(){
    this.router.navigate(['/serviceDetail/']);
  }
  clearTable(obj) {
    var index = this.tableData.data.indexOf(obj);
    this.tableData.data.splice(index,1)
    this.tableData = new MatTableDataSource<customerService>(CUSTOMERSERVICE);
  }
}
