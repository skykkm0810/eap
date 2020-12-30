import {  Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { point, POINTCHARGE,POINTUSEAGE } from '../../interface/interface';
import { worker, WORKERLIST } from '../../interface/interface';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements AfterViewInit {
  table1Columns: string[] = ["date","name","price","point","desc",'condition'];
  table1Data: MatTableDataSource<point>;
  table2Columns: string[] = ["date","name","point","title",'good'];
  table2Data: MatTableDataSource<point>;
  table3Columns: string[] = ["name","part","grade",'gender','TotalUsePoint','workLocation','contact','delete'];
  table3Data: MatTableDataSource<worker>;
  @ViewChild('pagnator1') paginator1: MatPaginator;
  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('pagnator2') paginator2: MatPaginator;
  @ViewChild('sort2') sort2: MatSort;
  @ViewChild('pagnator3') paginator3: MatPaginator;
  @ViewChild('sort3') sort3: MatSort;
  constructor(

    ) {
      this.table1Data = new MatTableDataSource(POINTCHARGE);
      this.table2Data = new MatTableDataSource(POINTUSEAGE);
      this.table3Data = new MatTableDataSource(WORKERLIST);
  
     }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.table1Data.paginator = this.paginator1;
    this.table1Data.sort = this.sort1;
    this.table2Data.paginator = this.paginator2;
    this.table2Data.sort = this.sort2;
    this.table3Data.paginator = this.paginator3;
    this.table3Data.sort = this.sort3;
  }
}

