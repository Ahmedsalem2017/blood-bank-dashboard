import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { base64Decode } from '@firebase/util';

@Injectable()
export class UserService {

   protected _isLogin: boolean;
   protected _isAdmin: boolean;
   public showPermissionDeniedMsg = false;
   user: any;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.isLogin = false;
    this.refreshState();
   }

  doLogin(email, password) {
    this.showPermissionDeniedMsg = false;
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

logout() {

  if (this.isAdmin === false || this.isAdmin == null) {
    this.showPermissionDeniedMsg = true;
  } else {this.showPermissionDeniedMsg = false; }

  this.afAuth.auth.signOut().then(_ => this.isLogin = false);
  this.router.navigate(['/login']);
}

refreshState() {
  this.afAuth.authState.subscribe(user => {
    if (user != null) {
      this.isLogin = true;
  this.afAuth.auth.currentUser.getIdToken().then(idToken => {
    const payload = JSON.parse(base64Decode(idToken.split('.')[1]));
   this.user = payload;
    this.isAdmin = payload.admin;
  });
    }
  });

}
  get isLogin() {return this._isLogin; }
  get isAdmin() {return this._isAdmin; }
  set isLogin(loginState) { this._isLogin = loginState; }
  set isAdmin(isAdmin) { this._isAdmin = isAdmin; }

}
