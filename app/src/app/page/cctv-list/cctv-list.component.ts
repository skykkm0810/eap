import { Component, OnInit } from '@angular/core';
import { CCTVLIST} from '../../interface/interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CctvAddComponent } from '../../modal/cctv-add/cctv-add.component';

@Component({
  selector: 'app-cctv-list',
  templateUrl: './cctv-list.component.html',
  styleUrls: ['./cctv-list.component.css']
})
export class CctvListComponent implements OnInit {
  cctvs = CCTVLIST;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addcctv(): void {
    const dialogRef = this.dialog.open(CctvAddComponent, {
      width: '40%',
    });
  }
}



