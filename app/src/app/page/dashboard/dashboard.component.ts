import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {REQUESTS , Request} from '../../interface/interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { log,LOG } from '../../interface/interface';
import { weather,WEATHER } from '../../interface/interface';
import { covid,COVID } from '../../interface/interface';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  requestColumns: string[] = ["id","progress","from","desc","who"];
  requestData: MatTableDataSource<Request>;
  logColumns: string[] = ["id",'name','type','center','time','desc'];
  logData: MatTableDataSource<log>;
  weatherColumns: string[] = ["id",'center','todayT','todayW','tmrrwT','tmrrwW'];
  weatherData: MatTableDataSource<weather>;
  covidColumns: string[] = ["id",'date','location','new','total','desc'];
  covidData: MatTableDataSource<covid>;
  @ViewChild('pagnator1') paginator1: MatPaginator;
  @ViewChild('pagnator2') paginator2: MatPaginator;
  @ViewChild('pagnator3') paginator3: MatPaginator;
  @ViewChild('pagnator4') paginator4: MatPaginator;
  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('sort2') sort2: MatSort;
  @ViewChild('sort3') sort3: MatSort;
  @ViewChild('sort4') sort4: MatSort;
  constructor() {
    this.requestData = new MatTableDataSource(REQUESTS);
    this.logData = new MatTableDataSource(LOG);
    this.weatherData = new MatTableDataSource(WEATHER);
    this.covidData = new MatTableDataSource(COVID);
   }
   ngAfterViewInit(): void {
    this.requestData.paginator = this.paginator1;
    this.requestData.sort = this.sort1;
    this.logData.paginator = this.paginator2;
    this.logData.sort = this.sort2;
    this.weatherData.paginator = this.paginator3;
    this.weatherData.sort = this.sort3;
    this.covidData.paginator = this.paginator4;
    this.covidData.sort = this.sort4;
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