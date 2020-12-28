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
  remove(obj){
    if(confirm("정말 삭제 하시겠습니까?")){
      // console.log(obj)
      // obj.closest('.gridItem').remove();
    }
  }
}
