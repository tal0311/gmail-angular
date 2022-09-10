import { UserService } from 'src/app/services/user.service';
import { MailService } from 'src/app/services/mail.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/models/mail';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent implements OnInit {
  constructor(
    private location: Location,
    private mailService: MailService,
    private userService: UserService
  ) {
    this.mail = this.mailService.getEmptyMail();
    console.log(this.mail);
  }
  mail!: any;
  user!: any;
  isExpand: boolean = false;
  isMini: boolean = false;
  gmailPattern: RegExp =
    /^[a-zA-Z0-9_.]+[+]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[\.][a-z]+$/gm;

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      this.user = user;
    });
  }
  onMinimize() {
    this.isMini = !this.isMini;
  }
  onCloseModal() {
    this.location.back();
  }
  onExpand() {
    this.isExpand = !this.isExpand;
  }
  sendMail() {
    if (!this.mail.to) {
      alert('Can not send mail with no destination');
      return;
    }
    if (!this.mail.subject) {
      confirm('Subject field empty') ? console.log(this.mail) : null;
    }
    console.log(this.user);
    this.mail.from.name = this.user.fullname;
    this.mailService.save(this.mail);
    this.onCloseModal();
  }
}
