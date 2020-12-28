import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CctvListComponent } from 'src/app/page/cctv-list/cctv-list.component';
@Component({
  selector: 'app-cctv-add',
  templateUrl: './cctv-add.component.html',
  styleUrls: ['./cctv-add.component.css']
})
export class CctvAddComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CctvListComponent>) { }

  ngOnInit(): void {
  }
  value() {
    var inputvalue = (document.getElementById('seniorImg') as HTMLInputElement).value;
    (document.getElementsByClassName('fileUpload')[0] as HTMLInputElement ).innerHTML = inputvalue
    if( inputvalue == ""){
      (document.getElementsByClassName('fileUpload')[0] as HTMLInputElement ).innerHTML = "파일 없음";
    }
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
