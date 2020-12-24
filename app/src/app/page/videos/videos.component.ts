import { Component, OnInit } from '@angular/core';
import { VIDEOS } from '../../interface/interface';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos = VIDEOS;
  detail(){
    location.href = './vdetail'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
