import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {dashlecture , TODAYLECTURE, BESTLECTURE} from '../../interface/interface';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  todayColumns: string[] = ["teacher","title","students","date"];
  todayData: MatTableDataSource<dashlecture>;
  bestColumns: string[] = ["teacher","title","students","point"];
  bestData: MatTableDataSource<dashlecture>;
  @ViewChild('pagnator1') paginator1: MatPaginator;
  @ViewChild('pagnator2') paginator2: MatPaginator;
  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('sort2') sort2: MatSort;
  constructor() {
    this.todayData = new MatTableDataSource(TODAYLECTURE);
    this.bestData = new MatTableDataSource(BESTLECTURE);
   }
   ngAfterViewInit(): void {
    this.todayData.paginator = this.paginator1;
    this.todayData.sort = this.sort1;
    this.bestData.paginator = this.paginator2;
    this.bestData.sort = this.sort2;
  }
  
  public lineChartData: ChartDataSets[] = [
    { data: [6500, 5900, 8000, 8100, 5600, 5500, 4000, 6300, 4000, 11300, 10200, 5600], label: 'A업체',fill:false },
    { data: [6000, 1900, 8500, 7100, 12060, 10500, 11000, 5600, 1900, 8300, 10200, 8600], label: 'B업체',fill:false },
  ];
  public lineChartLabels: Label[] = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  public lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Color[] = []
  public lineChartLegend = true;
  
  
}