import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details-action',
  templateUrl: './details-action.component.html',
  styleUrls: ['./details-action.component.scss'],
})
export class DetailsActionComponent {
  constructor(private location: Location) {}

  @Output() updateMail = new EventEmitter();
  // data
  actions = [
    [
      { icon: 'fa-solid fa-arrow-left', title: 'Back', value: 'back' },
      { icon: 'fa-solid fa-box-archive', title: 'Archive', value: 'archive' },
      {
        icon: 'fa-solid fa-circle-exclamation',
        title: 'Move to spam',
        value: 'spam',
      },
      { icon: 'fa-solid fa-trash-can', title: 'Remove', value: 'remove' },
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
      { icon: 'fa-solid fa-file-export', title: 'Move to', value: 'moveTo' },
      { icon: 'fa-solid fa-tag', title: 'Labels', value: 'labels' },
      { icon: 'fa-solid fa-ellipsis-vertical', title: 'more', value: 'more' },
    ],
  ];
  isModalOpen: boolean = false;

  // methods

  onBack() {
    this.location.back();
  }
  updateLabel(type: string) {
    this.updateMail.emit(type);
  }
  onMore() {
    this.isModalOpen = !this.isModalOpen;
    console.log('more options', this.isModalOpen);
  }
  onAction(type: string) {
    console.log(type);

    switch (type) {
      case 'back':
        this.onBack();
        return;
      case 'more':
        this.onMore();
        return;
      default:
        this.updateLabel(type);
        return;
    }
  }
}
