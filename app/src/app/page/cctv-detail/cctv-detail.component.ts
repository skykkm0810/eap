import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cctv-detail',
  templateUrl: './cctv-detail.component.html',
  styleUrls: ['./cctv-detail.component.css']
})
export class CctvDetailComponent implements OnInit {

  constructor(
    public route : ActivatedRoute,

  ) { }
  cctv: any;
  ngOnInit(): void {
    this.cctv = this.route.snapshot.paramMap.get('data');
    console.log(this.route.snapshot.params);
  }
}
