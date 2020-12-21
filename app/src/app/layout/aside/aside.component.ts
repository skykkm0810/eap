import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ASIDELISTS, USERS } from '../../interface/interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  items = ASIDELISTS;
  user = USERS;

  panelOpenState: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
