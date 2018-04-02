import { UserService } from './services/user.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public user: UserService) {
    console.log(user.isLogin);
  }


}
