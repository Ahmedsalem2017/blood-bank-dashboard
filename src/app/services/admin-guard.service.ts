import { UserService } from './user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(
    private user: UserService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase
  ) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.user.user !== undefined) {
      if (this.user.user.admin === false || this.user.user.admin == null) {
        /*  this.afDB.list('wronge_login').push({
           time: firebase.database.ServerValue.TIMESTAMP,
           user: this.user.user
         }); */
        this.router.navigate(['/denied']);
        this.user.logout();
        this.user.isAdmin = false;
     }
     return true;
   }
    }
}
