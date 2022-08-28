import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent implements OnInit {
  constructor(private location: Location) {}

  isExpand = false;
  isMini = false;

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
}
