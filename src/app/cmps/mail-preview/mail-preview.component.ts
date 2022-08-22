import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-preview',
  templateUrl: './mail-preview.component.html',
  styleUrls: ['./mail-preview.component.scss'],
})
export class MailPreviewComponent implements OnInit {
  @Input() mail: any;

  constructor() {}

  ngOnInit(): void {}
}
