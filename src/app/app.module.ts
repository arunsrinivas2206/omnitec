import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkComponent } from './components/where-we-work/work.component';
import { WhoComponent } from './components/who-are-we/who.component';

import { EnterpriseComponent } from './components/what-we-do/enterprise/enterprise.component';
import { MobileComponent } from './components/what-we-do/mobile-app-development/mobile.component';
import { QualityComponent } from './components/what-we-do/quality-assurance/quality.component';
import { WebsiteComponent } from './components/what-we-do/website-development/website.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareersComponent,
    ContactComponent,
    WorkComponent,
    WhoComponent,
    EnterpriseComponent,
    MobileComponent,
    QualityComponent,
    WebsiteComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
