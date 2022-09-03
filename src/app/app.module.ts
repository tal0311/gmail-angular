import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
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
import { UserPreviewComponent } from './cmps/user-preview/user-preview.component';
import { SearchInputComponent } from './cmps/search-input/search-input.component';
import { HeaderComponent } from './cmps/header/header.component';
import { LabelListComponent } from './cmps/label-list/label-list.component';
import { ActionsComponent } from './cmps/actions/actions.component';
import { LogoComponent } from './cmps/logo/logo.component';
import { UserMsgComponent } from './cmps/user-msg/user-msg.component';
import { MailPreviewComponent } from './cmps/mail-preview/mail-preview.component';
import { DetailsActionComponent } from './cmps/details-action/details-action.component';
import { ResponseActionsComponent } from './cmps/response-actions/response-actions.component';
import { MoreOptionsComponent } from './cmps/more-options/more-options.component';
import { SvgComponent } from './cmps/svg/svg.component';
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
    UserPreviewComponent,
    SearchInputComponent,
    HeaderComponent,
    LabelListComponent,
    ActionsComponent,
    LogoComponent,
    UserMsgComponent,
    MailPreviewComponent,
    DetailsActionComponent,
    ResponseActionsComponent,
    MoreOptionsComponent,
    SvgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
