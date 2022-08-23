import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-action',
  templateUrl: './details-action.component.html',
  styleUrls: ['./details-action.component.scss'],
})
export class DetailsActionComponent implements OnInit {
  constructor() {}

  // data
  actions = [
    [
      { icon: 'fa-solid fa-arrow-left', title: 'back', value: 'back' },
      { icon: 'fa-solid fa-box-archive', title: 'arc', value: 'archive' },
      { icon: 'fa-solid fa-circle-exclamation', title: 'spam', value: 'spam' },
      { icon: 'fa-solid fa-trash-can', title: 'remove', value: 'remove' },
    ],
    [
      { icon: 'fa-solid fa-envelope', title: 'Mark', value: 'isUnread' },
      { icon: 'fa-solid fa-clock', title: 'Remainder', value: 'remainder' },
      {
        icon: 'fa-solid fa-circle-check',
        title: 'Add Task',
        value: 'addToTask',
      },
    ],
    [
      { icon: 'fa-solid fa-file-export', title: 'Move to', value: 'isUnread' },
      { icon: 'fa-solid fa-tag', title: 'Labels', value: 'labels' },
      { icon: 'fa-solid fa-ellipsis-vertical', title: 'more', value: 'more' },
    ],
  ];
  ngOnInit(): void {}

  // methods
  onAction(type: string): void {
    console.log(type);
  }
}
