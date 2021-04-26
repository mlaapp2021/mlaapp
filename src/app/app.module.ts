import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { google } from 'google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { MaterialModules } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { LeftDrawerComponent } from './component/main/left-drawer/left-drawer/left-drawer.component';
import { MainContentComponent } from './component/main/main-content/main-content.component';
import { ModalDialogComponent } from './component/main/main-content/state-modals/telangana/issue-input-modal/modal-dialog/modal-dialog/modal-dialog.component';
import { ModalControllerComponent } from './component/main/main-content/state-modals/telangana/issue-input-modal/modal-controller/modal-controller.component';
import { CountryMapComponent } from './component/main/main-content/country-map/country-map.component';
import { LoginComponent } from './component/main/main-content/login/login.component';
import { ExistingDataGridComponent } from './component/main/existing-data-grid/existing-data-grid.component';
import { FaqsComponent } from './component/main/main-content/faqs/faqs.component';
import { FeedbackComponent } from './component/main/main-content/feedback/feedback.component';
import { PrivacyStatementComponent } from './component/main/main-content/privacy-statement/privacy-statement.component';
import { ContactUsComponent } from './component/main/main-content/contact-us/contact-us.component';
import { LegalAndRegulatoryComponent } from './component/main/main-content/legal-and-regulatory/legal-and-regulatory.component';
import { LandingComponent } from './component/main/main-content/landing/landing.component';
import { ReportIssueComponent } from './component/main/main-content/report-issue/report-issue.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LeftDrawerComponent,
    MainContentComponent,
    ModalDialogComponent,
    ModalControllerComponent,
    CountryMapComponent,
    LoginComponent,
    ExistingDataGridComponent,
    ReportIssueComponent,
    FaqsComponent,
    FeedbackComponent,
    PrivacyStatementComponent,
    ContactUsComponent,
    LegalAndRegulatoryComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
