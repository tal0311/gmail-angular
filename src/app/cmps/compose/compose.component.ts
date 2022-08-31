import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent implements OnInit {
  constructor(private location: Location) {}

  isExpand: boolean = false;
  isMini: boolean = false;

  mail = {
    to: '',
    subject: '',
    content: '',
  };

  ngOnInit(): void {}

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
      alert('Can not sent mail with no destination');
      return;
    }
    if (!this.mail.subject) {
      if (confirm('Subject field empty')) {
        console.log(this.mail);
      } else {
        return;
      }
    }
    console.log(this.mail);
  }
}
