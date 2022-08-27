import { UserMsgService } from './../../services/user-msg.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-user-msg',
  templateUrl: './user-msg.component.html',
  styleUrls: ['./user-msg.component.scss'],
})
export class UserMsgComponent implements OnInit, OnDestroy {
  @Input() msg: string | undefined;

  constructor(private userMsgService: UserMsgService) {}

  ngOnInit(): void {
    this.intervalId = setTimeout(this.resetMsg, 2000, '');
  }

  intervalId: any;
  resetMsg = (value: string) => {
    this.userMsgService.setMsg(value);
  };

  ngOnDestroy(): void {
    clearTimeout(this.intervalId);
  }
}
