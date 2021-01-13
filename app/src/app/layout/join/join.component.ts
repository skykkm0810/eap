import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  ValidateEmail(event: Event) {
    var mail = (event.target as HTMLInputElement);
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value)) {
      return (true)
    }
    mail.value = '';
    alert("올바른 이메일 형식이 아닙니다.");
    //  (document.getElementsByClassName('email')[0] as HTMLInputElement).setAttribute('value','');
    return (false)
  }

  checkPw(event: Event) {
    var pwchk = event.target as HTMLInputElement;
    var chknotice = pwchk.parentElement.getElementsByClassName('pwCheck')[0];
    var pw = pwchk.previousSibling.previousSibling as HTMLInputElement;
    if (pw.value == '') {
      chknotice.textContent = '위 비밀번호가 입력되지 않았습니다.'
    } else if (pw.value == pwchk.value) {
      chknotice.textContent = '비밀번호가 서로 일치합니다.'
      chknotice.classList.add('green');
    } else {
      chknotice.classList.remove('green');
      chknotice.textContent = '비밀번호가 서로 일치하지 않습니다.'
    }
  }

  upload(e: Event) {
    var input = e.target as HTMLInputElement;
    var fakeinput = input.parentElement.getElementsByClassName('clickFile')[0];
    fakeinput.textContent = input.value;
  }
  

}
