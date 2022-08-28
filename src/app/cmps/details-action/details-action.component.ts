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
      {
        icon: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/arrow_back/default/20px.svg',
        title: 'Back',
        value: 'back',
      },
      {
        icon: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/archive/default/20px.svg',
        title: 'Archive',
        value: 'archive',
      },
      {
        icon: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/report/default/20px.svg',
        title: 'Move to spam',
        value: 'spam',
      },
      {
        icon: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/delete/default/20px.svg',
        title: 'Remove',
        value: 'trash',
      },
    ],
    [
      {
        icon: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/mail/default/20px.svg',
        title: 'Mark unread',
        value: 'isUnread',
      },
      {
        icon: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/schedule/default/20px.svg',
        title: 'Remainder',
        value: 'remainder',
      },
      {
        icon: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/add_task/default/20px.svg',
        title: 'Add Task',
        value: 'addToTask',
      },
    ],
    [
      {
        icon: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/drive_file_move/default/20px.svg',
        title: 'Move to',
        value: 'moveTo',
      },
      {
        icon: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/label/default/20px.svg',
        title: 'Labels',
        value: 'labels',
      },
      {
        icon: 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/more_vert/default/20px.svg',
        title: 'more',
        value: 'more',
      },
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
