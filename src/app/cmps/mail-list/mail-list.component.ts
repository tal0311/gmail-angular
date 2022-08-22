import { MailService } from './../../services/mail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss'],
})
export class MailListComponent implements OnInit {
  // props

  // emits

  // services
  constructor() {}
  // data

  // created
  ngOnInit(): void {
    // console.log(this.mails);
    // this.mailService.query();
    // this.mailService.mails$.subscribe((mails) => {
    //   this.mails = mails;
    // });
  }
  // data

  // methods

  // computed
}
