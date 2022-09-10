import { Observable } from 'rxjs';
import { MailService } from './../../services/mail.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gmail-proj';

  msg$: Observable<string>;
  constructor(
    private mailService: MailService,
    private userService: UserService,
    private userMsgService: UserMsgService
  ) {
    this.msg$ = this.userMsgService.msg$;
  }
  ngOnInit(): void {
    this.userService.loadUser();
    this.mailService.query();
  }
}
