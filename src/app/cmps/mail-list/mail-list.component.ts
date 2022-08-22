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
  constructor(private mailService: MailService) {}
  // data
  mails: any;
  // created
  ngOnInit(): void {
    this.mailService.query();
    console.log('mail-list');

    this.mailService.mails$.subscribe((mails) => {
      this.mails = mails;
    });
  }
  // data

  // methods

  // computed
}
