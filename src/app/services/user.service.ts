import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  private _user$ = new BehaviorSubject(null);
  public user$ = this._user$.asObservable();

  userDb: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUser();
  }
  loadUser() {
    this.http.get('./../../assets/user.json').subscribe((user) => {
      this.userDb = user;
      this._user$.next(this.userDb);
    });
  }
}
