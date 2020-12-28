import { Component, OnInit,Inject } from '@angular/core';
import { Senior, SENIORS } from '../../interface/interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SeniorAddComponent } from '../../modal/senior-add/senior-add.component';
// import { SeniorUpdateComponent } from '../../modal/senior-update/senior-update.component';
@Component({
  selector: 'app-senior-list',
  templateUrl: './senior-list.component.html',
  styleUrls: ['./senior-list.component.css']
})
export class SeniorListComponent implements OnInit {

  seniors = SENIORS;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  detail(){
    location.href="./seniorDetail";
  }
  addSenior(): void {
    const dialogRef = this.dialog.open(SeniorAddComponent, {
      width: '40%',
    });
  }
  openNumber(){
    alert();
  }
  
}

