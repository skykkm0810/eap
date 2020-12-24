import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-notice-add',
  templateUrl: './notice-add.component.html',
  styleUrls: ['./notice-add.component.css']
})
export class NoticeAddComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  value() {
    var inputvalue = (document.getElementById('noticeFile') as HTMLInputElement).value;
    (document.getElementsByClassName('uploadfile')[0] as HTMLInputElement ).innerHTML = inputvalue
    if( inputvalue == ""){
      (document.getElementsByClassName('uploadfile')[0] as HTMLInputElement ).innerHTML = "파일 없음";
    }
  }
  back() {
    location.href = "./noticeList";
  }
}
