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
  constructor(
    public router : Router

  ) {
    this.tableData = new MatTableDataSource(CUSTOMERSERVICE);

   }

  
  ngAfterViewInit(): void {

  }
  Detail(){
    this.router.navigate(['/serviceDetail/']);
  }
}
