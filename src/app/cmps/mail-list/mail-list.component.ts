import { Observable, Subscription } from 'rxjs';
import { MailService } from './../../services/mail.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Mail } from 'src/app/models/mail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss'],
})
export class MailListComponent implements OnInit, OnDestroy {
  mails$!: Observable<Mail[]>;
  currTab!: string | null;
  subscription!: Subscription;
  constructor(private mailService: MailService, private route: ActivatedRoute) {
    this.mails$ = mailService.mails$;
  }

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe(({ tab }) => {
      console.log(tab);

      this.currTab = tab;
      this.mailService.setFilterBy({ tab, term: '' });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
