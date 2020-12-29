import { Component, OnInit } from '@angular/core';
import { ASIDELISTS, USERS } from '../../interface/interface';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  items = ASIDELISTS;
  user = USERS;
  constructor() { }

  ngOnInit(): void {
  }
  Onmouse(){
    var img = document.getElementsByClassName('userImg') as HTMLCollectionOf<HTMLElement>;
    var name = document.getElementsByClassName('userName') as HTMLCollectionOf<HTMLElement>;
    img[0].style.border = "2px solid orange";
    name[0].style.textDecoration = "underline";
  }
  mouseOut(){
    var img = document.getElementsByClassName('userImg') as HTMLCollectionOf<HTMLElement>;
    var name = document.getElementsByClassName('userName') as HTMLCollectionOf<HTMLElement>;
    img[0].style.border = "0";
    name[0].style.textDecoration = "none";
  }
//    searchTable() {
//     var input, filter, found, table, tr, td, i, j;
//     input = document.getElementById("search");
//     filter = input.value.toUpperCase();
//     table = document.getElementsByClassName("table")[0];
//     tr = table.getElementsByClassName("searchable");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td");
//         for (j = 0; j < td.length; j++) {
//             if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 found = true;
//             }
//         }
//         if (found) {
//             tr[i].style.display = "";
//             found = false;
//         } else {
//             tr[i].style.display = "none";
//         }
//     }
// }
}
