import { UtilService } from './util.service';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../models/mail';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(
    private httpClient: HttpClient,
    private utilsService: UtilService
  ) {}

  _mailsDb!: Mail[] | any;
  key: string = 'mail';
  private _mails$ = new BehaviorSubject<Mail[]>([]);
  public mails$ = this._mails$.asObservable();

  private _filterBy$ = new BehaviorSubject<any>('inbox');
  public filterBy$ = this._filterBy$.asObservable();

  public query() {
    // console.log('ms query');
    // const mailsFromStorage: any | null = this.loadFromStorage(this.key) || null;
    // console.log(mailsFromStorage);

    // if (mailsFromStorage) {
    //   this._mailsDb = mailsFromStorage;
    //   this._mails$.next(mailsFromStorage);
    //   return;
    // }

    this.httpClient.get('./../../assets/mail.json').subscribe((mails) => {
      this._mailsDb = mails;
      const filterBy = this._filterBy$.getValue();

      const mailsForDisplay = this._mailsDb.filter(
        (mailForDisplay: Mail) => mailForDisplay.tab === filterBy
      );
      this._mails$.next(mailsForDisplay);
    });
  }

  // public shouldAdoptPet() {
  //   return this.http
  //     .get<{ answer: string }>('https://yesno.wtf/api')
  //     .pipe(map((res) => res.answer));
  // }

  public getEmptyPet() {
    return {
      from: {
        tab: '',
        name: '',
        id: '',
      },
      subject: '',
      body: '',
      isRead: false,
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

  public setFilterBy(filterBy: string | null) {
    this._filterBy$.next(filterBy);
    this.query();
  }

  public save(mail: Mail) {
    return mail.id ? this._edit(mail) : this._add(mail);
    // }
  }
  private _add(mail: Mail) {
    mail.id = this.utilsService.makeId();
    this._mailsDb.push(mail);
    this._mails$.next(this._mailsDb);
    return of(mail);
  }

  private _edit(mail: Mail) {
    const pets = this._mailsDb;
    const petIdx = pets.findIndex((_mail: Mail) => _mail.id === mail.id);
    pets.splice(petIdx, 1, mail);
    this._mails$.next(pets);
    return of(mail);
  }
}
