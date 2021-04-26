import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/main/main-content/login/login.component';
import { ContactUsComponent } from './component/main/main-content/contact-us/contact-us.component';
import { CountryMapComponent } from './component/main/main-content/country-map/country-map.component';
import { FaqsComponent } from './component/main/main-content/faqs/faqs.component';
import { FeedbackComponent } from './component/main/main-content/feedback/feedback.component';
import { LandingComponent } from './component/main/main-content/landing/landing.component';
import { LegalAndRegulatoryComponent } from './component/main/main-content/legal-and-regulatory/legal-and-regulatory.component';
import { PrivacyStatementComponent } from './component/main/main-content/privacy-statement/privacy-statement.component';
import { ReportIssueComponent } from './component/main/main-content/report-issue/report-issue.component';
import { ModalControllerComponent } from './component/main/main-content/state-modals/telangana/issue-input-modal/modal-controller/modal-controller.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'landing/existingissues',
    component: CountryMapComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'landing/reportissue',
    component: ReportIssueComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'telangana',
    component: ModalControllerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'privacystatement',
    component: PrivacyStatementComponent,
  },
  {
    path: 'legalandregulatory',
    component: LegalAndRegulatoryComponent,
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
