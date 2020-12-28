import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SeniorListComponent } from 'src/app/page/senior-list/senior-list.component';
import { Senior } from '../../interface/interface';

@Component({
  selector: 'app-senior-add',
  templateUrl: './senior-add.component.html',
  styleUrls: ['./senior-add.component.css']
})

export class SeniorAddComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SeniorListComponent>) { }

  @Input() senior : Senior;

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
