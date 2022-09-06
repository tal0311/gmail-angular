import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mail-preview',
  templateUrl: './mail-preview.component.html',
  styleUrls: ['./mail-preview.component.scss'],
})
export class MailPreviewComponent implements OnInit {
  @Input() mail: any;
  @Output() updateMail = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // methods

  navigateTo(mailId: string) {
    this.updateMail.emit(mailId);
    this.router.navigateByUrl(`mail/${mailId}`);
  }
}
