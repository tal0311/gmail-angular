import { Search } from './../../models/search';
import { MailService } from 'src/app/services/mail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  constructor(private mailService: MailService) {}
  filterBy!: Search | any;
  ngOnInit(): void {
    this.mailService.filterBy$.subscribe((filterBy) => {
      this.filterBy = filterBy;
      console.log('this filter:', this.filterBy);
    });
  }

  setSearch() {
    this.mailService.setFilterBy(this.filterBy);
  }
}
