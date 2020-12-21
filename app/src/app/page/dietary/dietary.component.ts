import { Component, OnInit } from '@angular/core';
import { DIETARYS} from '../../interface/interface';
@Component({
  selector: 'app-dietary',
  templateUrl: './dietary.component.html',
  styleUrls: ['./dietary.component.css']
})
export class DietaryComponent implements OnInit {
  Month = new Date().getMonth();
  dietarys = DIETARYS;
  constructor() { }

  ngOnInit(): void {
  }

}
