import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from "../../interface/interface";
@Component({
  selector: 'app-photobook',
  templateUrl: './photobook.component.html',
  styleUrls: ['./photobook.component.css']
})
export class PhotobookComponent implements OnInit {
  activities = ACTIVITIES;
  constructor() { }

  ngOnInit(): void {
  }

}
