import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkComponent } from './components/where-we-work/work.component';
import { WhoComponent } from './components/who-are-we/who.component';

import { EnterpriseComponent } from './components/what-we-do/enterprise/enterprise.component';
import { MobileComponent } from './components/what-we-do/mobile-app-development/mobile.component';
import { QualityComponent } from './components/what-we-do/quality-assurance/quality.component';
import { WebsiteComponent } from './components/what-we-do/website-development/website.component';

const routes: Routes = [{ path: '', component: HomeComponent },
				{ path: 'careers', component: CareersComponent },
				{ path: 'contact', component: ContactComponent },
				{ path: 'work', component: WorkComponent },
				{ path: 'who', component: WhoComponent },

				{ path: 'enterprise', component: EnterpriseComponent },
				{ path: 'mobile', component: MobileComponent },
				{ path: 'quality', component: QualityComponent },
				{ path: 'website', component: WebsiteComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
