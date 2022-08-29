import { Observable } from 'rxjs';
import { MailService } from 'src/app/services/mail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  isCollapsed$: Observable<boolean>;
  isCollapsed!: boolean;
  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private mailService: MailService
  ) {
    this.isCollapsed$ = mailService.isCollapsed$;
  }

  ngOnInit(): void {
    this.mailService.isCollapsed$.subscribe((value) => {
      this.isCollapsed = value;
    });
  }

  updateFilter(path: string) {
    console.log(path);
  }
}
