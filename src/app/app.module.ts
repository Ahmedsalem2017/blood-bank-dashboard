import { AuthGuardService } from './services/auth-guard.service';
import { environment } from './../environments/environment';
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

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ReactiveFormsModule } from '@angular/forms';
const appRoutes: Routes = [
  {
    path: '',
    component: FeedbackComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    component: FeedbackComponent,
    canActivate: [AuthGuardService]
  },
{
  path: 'donors',
  component: DonorsComponent,
  canActivate: [AuthGuardService]
},
{
  path: 'requests',
  component: RequestsComponent,
  canActivate: [AuthGuardService]
},
{
  path: 'feedback',
  component: FeedbackComponent,
  canActivate: [AuthGuardService]
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
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
