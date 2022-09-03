import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent implements OnInit {
  @Input() icon!: string;

  constructor() {}

  ngOnInit(): void {}
  action(action: string) {
    console.log('action is', action);
  }
}
