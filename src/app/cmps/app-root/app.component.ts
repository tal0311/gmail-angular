import { MailService } from './../../services/mail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gmail-proj';

  constructor(private mailService: MailService) {}
  ngOnInit(): void {
    this.mailService.query();
  }
}
