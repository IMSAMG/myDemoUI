import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInfoComponent } from './additionalInformation/addInfo.component';
import { AfbComponent } from './applyforbenefits/afb.component';
import { DemoComponent } from './demographic/demo.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { PsComponent } from './prescreening/ps.component';
import { EligResultsComponent } from './EligResults/eligResults.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'apply', component: AfbComponent },
  { path: 'prescreen', component: PsComponent },
  { path: 'start', component: MemberComponent },
  { path: 'member', component: DemoComponent },
  { path: 'additionalInfo', component: AddInfoComponent },
  { path: 'eligResults', component: EligResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
