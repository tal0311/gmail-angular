import { User } from './../models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  private _user$ = new BehaviorSubject<User>({
    name: '',
    email: '',
    fullname: '',
    imgUrl: '',
  });
  public user$ = this._user$.asObservable();

  loggedInUser!: User | any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUser();
    console.log(this.loggedInUser);
  }
  loadUser() {
    console.log('getting user');

    this.http.get('@assets/user.json').subscribe((user) => {
      this.loggedInUser = user;

      this._user$.next(this.loggedInUser);
    });
  }

  getLoggedInUser() {
    console.log(this.loggedInUser);

    return this.loggedInUser;
  }
}
