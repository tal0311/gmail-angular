import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './cmps/app-root/app.component';
import { MailListComponent } from './cmps/mail-list/mail-list.component';
import { SideBarComponent } from './cmps/side-bar/side-bar.component';
import { MailAppComponent } from './pages/mail-app/mail-app.component';
import { MailComponent } from './pages/mail/mail.component';
import { ComposeComponent } from './cmps/compose/compose.component';
import { MailDetailsComponent } from './pages/mail-details/mail-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MailBoardComponent } from './pages/mail-board/mail-board.component';

@NgModule({
  declarations: [
    AppComponent,
    MailListComponent,
    SideBarComponent,
    MailAppComponent,
    MailComponent,
    ComposeComponent,
    MailDetailsComponent,
    NotFoundComponent,
    MailBoardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
