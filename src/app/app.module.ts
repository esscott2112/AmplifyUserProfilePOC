import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule}  from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';


import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { Summaryreport1Component } from './summaryreport1/summaryreport1.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProfileComponent,
    Summaryreport1Component    
  ],
  imports: [
    FormsModule,
    MDBBootstrapModule,
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    CommonModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
