import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CmpltService } from './cmplt.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComplaintsComponent,
    FeedbackComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ["places"]
    })
  ],
  providers: [CmpltService],
  bootstrap: [AppComponent]
})
export class AppModule { }
