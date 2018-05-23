import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{path:'', redirectTo: '/home', pathMatch: 'full'},
{path:'home', component:HomeComponent},
{path:'complaints', component:ComplaintsComponent},
{path:'feedback', component:FeedbackComponent},
{path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
