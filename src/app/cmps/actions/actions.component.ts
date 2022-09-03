import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  @Output() onAction = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  action(action: string) {
    this.onAction.emit(action);
  }
}
