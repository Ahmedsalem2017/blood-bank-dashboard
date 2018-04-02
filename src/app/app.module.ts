import { PaginationComponent } from './components/pagination/pagination.component';
import { WrongeWayComponent } from './components/wronge-way/wronge-way.component';
import { PermiessionsDeniedComponent } from './components/permiessions-denied/permiessions-denied.component';
import { AdminGuardService } from './services/admin-guard.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination';



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
import { LoginGuardService } from './services/login-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: FeedbackComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  {
    path: 'home',
    component: FeedbackComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
{
  path: 'donors',
  component: DonorsComponent,
  canActivate: [AuthGuardService, AdminGuardService]
},
{
  path: 'requests',
  component: RequestsComponent,
  canActivate: [AuthGuardService, AdminGuardService]
},
{
  path: 'feedback',
  component: FeedbackComponent,
  canActivate: [AuthGuardService, AdminGuardService]
},
{
  path: 'login',
  component: LoginComponent,
  canActivate: [LoginGuardService]
},
{
  path: 'denied',
  component: PermiessionsDeniedComponent
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
    WrongeWayComponent,
    PermiessionsDeniedComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgxPaginationModule
  ],
  providers: [
    AuthGuardService,
    LoginGuardService,
    UserService,
    AdminGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
