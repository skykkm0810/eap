import { Component, OnInit } from '@angular/core';
import { Senior, SENIORS } from '../../interface/interface';

@Component({
  selector: 'app-senior-list',
  templateUrl: './senior-list.component.html',
  styleUrls: ['./senior-list.component.css']
})
export class SeniorListComponent implements OnInit {

  seniors = SENIORS;

  constructor() { }

  ngOnInit(): void {
  }

}
