import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  @Input() isCollapsed!: boolean | null;

  constructor() {}

  ngOnInit(): void {}

  collapsed() {
    this.toggle.emit();
  }
}
