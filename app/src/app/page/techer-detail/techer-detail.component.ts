import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TeachersLectureComponent } from '../../modal/teachers-lecture/teachers-lecture.component';

@Component({
  selector: 'app-techer-detail',
  templateUrl: './techer-detail.component.html',
  styleUrls: ['./techer-detail.component.css']
})
export class TecherDetailComponent implements OnInit {

  constructor(
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
  }
  addSenior(): void {
    const dialogRef = this.dialog.open(TeachersLectureComponent, {
      width: '50%',
    });
  }
}
