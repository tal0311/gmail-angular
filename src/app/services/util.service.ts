import { Injectable } from '@angular/core';
import { Mail } from '../models/mail';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  makeId(length = 5) {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  loadFromStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }
  saveToStorage(key: string, value: Mail[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
