import { Subscription } from 'rxjs';
import { Search } from './../../models/search';
import { MailService } from 'src/app/services/mail.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  constructor(private mailService: MailService) {}
  filterBy!: Search | any;
  filterSub!: Subscription;
  ngOnInit(): void {
    this.filterSub = this.mailService.filterBy$.subscribe((filterBy) => {
      this.filterBy = filterBy;
    });
  }

  setSearch() {
    this.mailService.setFilterBy(this.filterBy);
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }
}
