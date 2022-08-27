import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$!: Observable<any>;
  constructor(private userService: UserService) {
    this.user$ = userService.user$;
  }

  ngOnInit(): void {}
}
