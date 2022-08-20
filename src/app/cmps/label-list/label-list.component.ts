import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss'],
})
export class LabelListComponent implements OnInit {
  // props
  // emits
  constructor() {}
  ngOnInit(): void {}
  // data
  labels = [
    {
      name: 'inbox',
      icon: '',
      route: 'mail/all',
    },
    {
      name: 'starred',
      icon: '',
      route: 'mail/starred',
    },
    {
      name: 'Sent',
      icon: '',
      route: 'mail/sent',
    },
    {
      name: 'Draft',
      icon: '',
      route: 'mail/draft',
    },
    {
      name: 'Important',
      icon: '',
      route: 'mail/important',
    },
    {
      name: 'Trash',
      icon: '',
      route: 'mail/trash',
    },
  ];

  // methods
  setRoute(route: string) {
    console.log(route);
  }
  // computed
}
