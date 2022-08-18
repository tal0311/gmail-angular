import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailAppComponent } from './pages/mail-app/mail-app.component';
import { MailComponent } from './pages/mail/mail.component';
import { ComposeComponent } from './cmps/compose/compose.component';
import { MailDetailsComponent } from './pages/mail-details/mail-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MailAppComponent },
  {
    path: 'mail',
    component: MailComponent,
    children: [
      {
        path: 'compose',
        component: ComposeComponent,
      },
    ],
  },

  { path: 'mail/:id', component: MailDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
