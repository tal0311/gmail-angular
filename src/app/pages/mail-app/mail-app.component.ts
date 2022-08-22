import { MailService } from './../../services/mail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-app',
  templateUrl: './mail-app.component.html',
  styleUrls: ['./mail-app.component.scss'],
})
export class MailAppComponent implements OnInit {
  constructor(private mailService: MailService) {}

  ngOnInit(): void {
    this.mailService.query();
  }
}
