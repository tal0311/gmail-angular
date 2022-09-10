import { MailService } from 'src/app/services/mail.service';
import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$!: Observable<any>;

  isCollapsed$: Observable<boolean>;
  constructor(
    private userService: UserService,
    private mailService: MailService
  ) {
    this.user$ = userService.user$;
    this.isCollapsed$ = mailService.isCollapsed$;
  }

  ngOnInit(): void {}

  action(action: string) {
    console.log('action is', action);
  }

  onResize(event: any) {
    event.target.innerWidth < 1000 ? this.mailService.setResize() : null;
  }
  toggleMenu() {
    this.mailService.setIsCollapsed();
  }
}
