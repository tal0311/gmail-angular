import { MailService } from './../../services/mail.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gmail-proj';

  constructor(
    private mailService: MailService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.mailService.query();
    this.userService.loadUser();
  }
}
