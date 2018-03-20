import { WrongeWayComponent } from './components/wronge-way/wronge-way.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RightOffcanvasComponent } from './components/right-offcanvas/right-offcanvas.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { DonorsComponent } from './pages/donors/donors.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: FeedbackComponent
  },
  {
    path: 'home',
    component: FeedbackComponent
  },
{
  path: 'donors',
  component: DonorsComponent
},
{
  path: 'requests',
  component: RequestsComponent
},
{
  path: 'feedback',
  component: FeedbackComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: '**',
  component: WrongeWayComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    RightOffcanvasComponent,
    FooterComponent,
    LoginComponent,
    DonorsComponent,
    RequestsComponent,
    FeedbackComponent,
    WrongeWayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
