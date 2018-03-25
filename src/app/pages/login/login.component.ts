import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loginError = false;
  loading = false;
  constructor(private afAuth: AngularFireAuth,
              private user: UserService,
              private router: Router) {

    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
   }

  ngOnInit() {
    console.log(this.user.isLogin);
    this.user.refreshState();
  }

  doLogin() {
    this.loading = true;
    this.loginError = false;
    this.user.doLogin(this.email.value, this.password.value)
              .then(result => {
                this.user.isLogin = true;
                this.loading = false;
                this.loginError = false;
                this.router.navigate(['/home']);
              }, error => {
                this.user.isLogin = false;
                this.loading = false;
                this.loginError = true;
              });
  }
get email() {return this.form.get('email'); }
get password() {return this.form.get('password'); }
}
