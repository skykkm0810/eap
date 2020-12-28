import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Senior } from 'src/app/interface/interface';
@Component({
  selector: 'app-senior-update',
  templateUrl: './senior-update.component.html',
  styleUrls: ['./senior-update.component.css']
})
export class SeniorUpdateComponent implements OnInit {
    constructor(
    public dialogRef2: MatDialogRef<SeniorUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Senior) {}
  

  ngOnInit(): void {
  }
  
}

