import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserMsgService {
  private _msg$ = new BehaviorSubject('');
  public msg$ = this._msg$.asObservable();
  constructor() {}

  setMsg(value: string) {
    console.log(value);
    this._msg$.next(value);
  }
}
