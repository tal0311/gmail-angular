import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailAppComponent } from './pages/mail-app/mail-app.component';
import { MailComponent } from './pages/mail/mail.component';
import { ComposeComponent } from './cmps/compose/compose.component';
import { MailDetailsComponent } from './pages/mail-details/mail-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MailBoardComponent } from './pages/mail-board/mail-board.component';
import { MailResolver } from './services/mail.resolver';

const routes: Routes = [
  { path: '', component: MailAppComponent },
  {
    path: 'mail',
    component: MailBoardComponent,
    children: [
      {
        path: 'all',
        component: MailComponent,
        children: [
          {
            path: 'compose',
            component: ComposeComponent,
          },
        ],
      },
      {
        path: ':id',
        component: MailDetailsComponent,
        resolve: { mail: MailResolver },
      },
    ],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
