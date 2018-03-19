import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DonorsComponent } from './pages/donors/donors.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DonorsComponent,
    RequestsComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
