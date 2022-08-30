import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss'],
})
export class LabelListComponent implements OnInit {
  // props
  @Input() isCollapsed!: boolean;
  // emits
  @Output() setRout = new EventEmitter();

  constructor(private mailService: MailService) {
    this.labelsLength = this.mailService.getTabsLength();
  }
  ngOnInit(): void {}
  // data
  composeUrl =
    'https://www.gstatic.com/images/icons/material/system_gm/1x/create_black_24dp.png';
  labelsLength;
  labels = [
    {
      name: 'Inbox',
      icon: 'https://www.gstatic.com/images/icons/material/system_gm/1x/inbox_black_20dp.png',
      value: 'inbox',
    },
    {
      name: 'Starred',
      icon: 'https://www.gstatic.com/images/icons/material/system_gm/1x/star_border_black_20dp.png',
      value: 'starred',
    },
    {
      name: 'Sent',
      icon: 'https://www.gstatic.com/images/icons/material/system_gm/1x/send_black_20dp.png',
      value: 'sent',
    },
    {
      name: 'Draft',
      icon: 'https://www.gstatic.com/images/icons/material/system_gm/1x/insert_drive_file_black_20dp.png',
      value: 'draft',
    },
    {
      name: 'Important',
      icon: 'https://www.gstatic.com/images/icons/material/system_gm/1x/label_important_outline_black_20dp.png',
      value: 'important',
    },
    {
      name: 'Trash',
      icon: 'https://www.gstatic.com/images/icons/material/system_gm/1x/delete_black_20dp.png',
      value: 'trash',
    },
  ];

  // methods
  getLength(labelName: string) {
    const labels = this.mailService.getTabsLength();
    return labels[labelName];
  }

  // computed
}
