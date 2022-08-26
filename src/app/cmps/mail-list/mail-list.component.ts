import { Observable } from 'rxjs';
import { MailService } from './../../services/mail.service';
import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/models/mail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss'],
})
export class MailListComponent implements OnInit {
  mails$!: Observable<Mail[]>;
  currTab!: string | null;

  constructor(private mailService: MailService, private route: ActivatedRoute) {
    this.mails$ = mailService.mails$;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ tab }) => {
      this.currTab = tab;
      this.mailService.setFilterBy(this.currTab);
    });
  }
}
