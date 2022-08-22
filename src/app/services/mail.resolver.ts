import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MailService } from './mail.service';

@Injectable({
  providedIn: 'root',
})
export class MailResolver implements Resolve<any> {
  constructor(private mailService: MailService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const mailId = route.params['id'] || 'e101';
    console.log(mailId);

    return this.mailService.getById(mailId);
  }
}
