import { MailService } from './../../services/mail.service';
import { Mail } from './../../models/mail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.scss'],
})
export class MailDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private mailService: MailService
  ) {}

  // data

  mail!: Mail | any;
  ngOnInit(): void {
    // this.route.params.subscribe(async (params) => {
    //   //test firstValueFrom instead of toPromise
    //   const mail = await lastValueFrom(this.mailService.getById(params['id']), {
    //     defaultValue: undefined,
    //   });
    //   console.log(mail);
    //   console.log(mail);

    //   this.mail = mail;
    // });
    this.route.data.subscribe(({ mail }) => {
      if (mail) this.mail = mail;
    });
  }
}
