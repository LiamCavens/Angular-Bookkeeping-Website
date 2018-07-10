import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TranscriptionComponent } from './pages/transcription/transcription.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';

const appRoutes: Routes = [
  { path: 'transcription', component: TranscriptionComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TranscriptionComponent,
    FinanceComponent,
    AdministrationComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
