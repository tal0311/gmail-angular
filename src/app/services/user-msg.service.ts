import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserMsgService {
  constructor() {}

  setMsg(value: string) {
    console.log('msg', value);
  }
}
