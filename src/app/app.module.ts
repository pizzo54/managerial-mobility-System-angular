import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './Components/test/test.component';
import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';
import { PostesComponent } from './Components/postes/postes.component';
import { NominationsComponent } from './Components/nominations/nominations.component';
import { CandidatureComponent } from './Components/candidature/candidature.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const AppRouting : Routes = [
  {path: ''  , component : LandingPageComponent},
  {path: 'dashboard'  , component : DashboardComponent},

  {path: 'login'  , component : LoginComponent},
  {path: 'user'  , component : UserComponent},
 

  {path: 'poste' , component : PostesComponent },
  {path: 'Candidature' , component : CandidatureComponent },
  {path: 'nomination' , component : NominationsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    TestComponent,
    HomeComponent,
    UserComponent,
    PostesComponent,
    NominationsComponent,
    CandidatureComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRouting),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
