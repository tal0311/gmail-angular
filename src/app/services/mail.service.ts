import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private httpClient: HttpClient) {}

  _mailsDb: any;

  private _mails$ = new BehaviorSubject<any>([]);
  public mails$ = this._mails$.asObservable();

  // private _filterBy$ = new BehaviorSubject<PetFilter>({ term: '' });
  // public filterBy$ = this._filterBy$.asObservable();

  public query() {
    console.log('query');

    this.httpClient.get('./../../assets/mail.json').subscribe((mails) => {
      // console.log(mails);
      this._mailsDb = mails;
    });
    // const filterBy = this._filterBy$.getValue();
    const mails = this._mailsDb;
    // console.log(mails);
    this._mails$.next(mails);
  }

  // public shouldAdoptPet() {
  //   return this.http
  //     .get<{ answer: string }>('https://yesno.wtf/api')
  //     .pipe(map((res) => res.answer));
  // }

  // public getEmptyPet() {
  //   return { name: '', age: 0, birthDate: new Date() };
  // }

  // public remove(petId: string) {
  //   const pets = this._mailsDb;
  //   const petIdx = pets.findIndex((pet) => pet._id === petId);
  //   pets.splice(petIdx, 1);
  //   this._mails$.next(pets);
  //   return of({});
  // }

  // public getById(petId: string): Observable<Pet> {
  //   const pet = this._mailsDb.find((pet) => pet._id === petId);
  //   return of({ ...pet });
  // }

  // public setFilterBy(filterBy: PetFilter) {
  //   this._filterBy$.next({ ...filterBy });
  //   this.query();
  // }

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
}
