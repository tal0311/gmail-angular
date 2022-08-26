import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss'],
})
export class LabelListComponent implements OnInit {
  // props
  // emits
  @Output() setRout = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  // data
  labels = [
    {
      name: 'Inbox',
      icon: '',
      value: 'inbox',
    },
    {
      name: 'Starred',
      icon: '',
      value: 'starred',
    },
    {
      name: 'Sent',
      icon: '',
      value: 'sent',
    },
    {
      name: 'Draft',
      icon: '',
      value: 'draft',
    },
    {
      name: 'Important',
      icon: '',
      value: 'important',
    },
    {
      name: 'Trash',
      icon: '',
      value: 'trash',
    },
  ];

  // methods

  // computed
}
