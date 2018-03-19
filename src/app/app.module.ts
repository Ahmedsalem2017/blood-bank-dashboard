import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RightOffcanvasComponent } from './components/right-offcanvas/right-offcanvas.component';
import { FooterComponent } from './components/footer/footer.component';
=======
import { LoginComponent } from './pages/login/login.component';
import { DonorsComponent } from './pages/donors/donors.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
>>>>>>> d1ce60663a45eb9e4865fbed8ee87b98a2269685


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    NavBarComponent,
    RightOffcanvasComponent,
    FooterComponent
=======
    LoginComponent,
    DonorsComponent,
    RequestsComponent,
    FeedbackComponent
>>>>>>> d1ce60663a45eb9e4865fbed8ee87b98a2269685
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
