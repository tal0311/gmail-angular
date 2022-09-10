import { UserService } from './user.service';
import { UserMsgService } from './user-msg.service';
import { Mail } from 'src/app/models/mail';
import { UtilService } from './util.service';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Search } from '../models/search';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class MailService implements OnInit, OnDestroy {
  constructor(
    private httpClient: HttpClient,
    private utilsService: UtilService,
    private msgService: UserMsgService,
    private userService: UserService
  ) {
    this.user$ = this.userService.user$;
  }

  user$!: Observable<User>;
  _mailsDb!: Mail[] | any;
  key: string = 'mail';
  userSubscription!: Subscription;

  private _mails$ = new BehaviorSubject<Mail[]>([]);
  public mails$ = this._mails$.asObservable();

  private _filterBy$ = new BehaviorSubject<Search | null>({
    tab: 'inbox',
    term: '',
  });
  public filterBy$ = this._filterBy$.asObservable();

  private _isCollapsed$ = new BehaviorSubject<boolean>(false);
  public isCollapsed$ = this._isCollapsed$.asObservable();

  ngOnInit(): void {
    console.log('oninit');
    this.getTabsLength();
    console.log(this.user$);
  }

  public query() {
    console.log('ms query');
    const mailsFromStorage: any | null =
      this.utilsService.loadFromStorage(this.key) || null;
    if (mailsFromStorage) {
      this._mailsDb = mailsFromStorage;
      const mailsForDisplay = this._mailsDb.filter(this._buildFilter);
      this._mails$.next(mailsForDisplay);
      return;
    }

    this.httpClient.get('./../../assets/mail.json').subscribe((mails) => {
      this._mailsDb = mails;
      const mailsForDisplay = this._mailsDb.filter(this._buildFilter);
      this._mails$.next(mailsForDisplay);
    });
  }

  public getTabsLength(): any {
    const labels = this._mailsDb.reduce((acc: any, curr: any) => {
      console.log();
      if (!curr.isRead) {
        let { tab } = curr;
        acc[tab] = acc[tab] ? acc[tab] + 1 : 1;
      } else if (curr.tab === 'sent') {
        let { tab } = curr;
        acc[tab] = acc[tab] ? acc[tab] + 1 : 1;
      }
      return acc;
    }, {});
    return labels;
  }

  // }

  public getEmptyMail() {
    return {
      id: 0,
      tab: 'sent',
      from: { name: '', id: '' },
      subject: '',
      body: '',
      isRead: true,
      sentAt: Date.now(),
      to: '',
    };
  }
  // public remove(petId: string) {
  //   const pets = this._mailsDb;
  //   const petIdx = pets.findIndex((pet) => pet._id === petId);
  //   pets.splice(petIdx, 1);
  //   this._mails$.next(pets);
  //   return of({});
  // }

  public getById(mailId: string): Observable<Mail> {
    const mail = this._mailsDb.find((mail: Mail) => mail.id === mailId);
    return of({ ...mail });
  }

  public setFilterBy(filterBy: Search | null) {
    this._filterBy$.next(filterBy);
    this.query();
  }

  public setIsReadStatus(mailId: string, type: string) {
    const mail = this._mailsDb.find((mail: Mail) => mail.id === mailId);
    type === 'resetUnread' ? (mail.isRead = false) : (mail.isRead = true);

    this._mails$.next(this._mailsDb);
    this.utilsService.saveToStorage(this.key, this._mailsDb);
    this.msgService.setMsg(`Mail read status has been changed`);
    this.utilsService.saveToStorage(this.key, this._mailsDb);
  }
  public save(mail: Mail) {
    return mail.id ? this._edit(mail) : this._add(mail);
    // }
  }

  public replay(mailId: string) {
    console.log('replay to mail with id', mailId);
  }
  private _add(mail: Mail) {
    console.log(mail);

    const mailToSend = {
      ...mail,
      id: this.utilsService.makeId(),
      sentAt: Date.now(),
    };

    this._mailsDb.push(mailToSend);
    this._mails$.next(this._mailsDb);
    this.msgService.setMsg(`Mail was sent to: ${mail.to}`);
    this.utilsService.saveToStorage(this.key, this._mailsDb);
    return of(mail);
  }

  private _edit(mail: Mail) {
    const mails = this._mailsDb;
    const idx = mails.findIndex((_mail: Mail) => _mail.id === mail.id);
    mails.splice(idx, 1, mail);
    this._mails$.next(mails);
    console.log(mails);
    this._mailsDb = [...mails];
    this.utilsService.saveToStorage(this.key, this._mailsDb);
    this.msgService.setMsg(`Mail moved to tab ${mail.tab}`);
    return of(mail);
  }

  private _buildFilter = (mail: Mail) => {
    const filterBy = this._filterBy$.getValue();
    return (
      mail.tab === filterBy?.tab &&
      mail.from.name.toLowerCase().includes(filterBy?.term || '')
    );
  };
  setIsCollapsed() {
    let value = this._isCollapsed$.getValue();
    value = !value;
    this._isCollapsed$.next(value);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
