import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent implements OnInit {
  constructor() {}

  isExpand = false;
  isMini = false;
  ngOnInit(): void {}

  onMinimize() {
    this.isMini = !this.isMini;
  }
  onCloseModal() {}
  onExpand() {
    this.isExpand = !this.isExpand;
  }
}
