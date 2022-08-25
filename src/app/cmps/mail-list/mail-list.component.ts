import { Observable } from 'rxjs';
import { MailService } from './../../services/mail.service';
import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/models/mail';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss'],
})
export class MailListComponent {
  mails$!: Observable<Mail[]>;
  constructor(private mailService: MailService) {
    this.mails$ = mailService.mails$;
  }
}
