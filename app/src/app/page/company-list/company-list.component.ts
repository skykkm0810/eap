import {  Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { company, COMPANYLIST } from '../../interface/interface';
import { Router } from '@angular/router';
import { ExportService } from '../../service/export.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements AfterViewInit {
  tableColumns: string[] = ["name","start","end","totalPoint",'alivePoint','personalPoint','workerNum','manager','contact','email'];
  tableData: MatTableDataSource<company>;
  constructor(
    public router : Router,
    private ext : ExportService
  ) {
    this.tableData = new MatTableDataSource(COMPANYLIST);
  }

  
  ngAfterViewInit(): void {

  }

  Detail(){
    this.router.navigate(['/companyDetail/']);
  }

  export() {
    this.ext.exportExcel( 'companyList', 'companyList' );
  }
}
