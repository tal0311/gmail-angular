import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../models/mail';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private httpClient: HttpClient) {}

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
      console.log(filterBy);
      // this.saveToStorage(this.key, this._mailsDb);
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

  // public save(pet: Pet) {
  //   return pet._id ? this._edit(pet) : this._add(pet);
  // }

  // private _add(pet: Pet) {
  //   pet._id = this._makeId();
  //   this._mailsDb.push(pet);
  //   this._mails$.next(this._mailsDb);
  //   return of(pet);
  // }

  // private _edit(pet: Pet) {
  //   const pets = this._mailsDb;
  //   const petIdx = pets.findIndex((_pet) => _pet._id === pet._id);
  //   pets.splice(petIdx, 1, pet);
  //   this._mails$.next(pets);
  //   return of(pet);
  // }

  // private _makeId(length = 5) {
  //   var text = '';
  //   var possible =
  //     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   for (var i = 0; i < length; i++) {
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   }
  //   return text;
  // }

  private loadFromStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }
  private saveToStorage(key: string, value: Mail[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
