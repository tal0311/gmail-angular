import { MailService } from './../../services/mail.service';
import { Mail } from './../../models/mail';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.scss'],
})
export class MailDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private mailService: MailService
  ) {}

  // data
  buttons = [
    {
      title: 'Replay',
      link: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/reply/default/20px.svg',
      value: 'replay',
    },
    {
      title: 'Star',
      link: 'https://www.gstatic.com/images/icons/material/system_gm/1x/star_border_black_20dp.png',
      value: 'star',
    },
    {
      title: 'More',
      link: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/more_vert/default/20px.svg',
      value: 'more',
    },
  ];
  mail!: Mail | any;
  subscription!: Subscription;
  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(({ mail }) => {
      if (mail) this.mail = mail;
    });
  }

  update(value: string) {
    console.log('update type:', value);
    this.mail.tab = value;
    console.log('updated mail', this.mail);
    this.mailService.save(this.mail);
  }

  onAction(value: string) {
    console.log(value);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
