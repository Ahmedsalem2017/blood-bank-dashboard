import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class LoginGuardService implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  canActivate (router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.afAuth.authState.subscribe(isLogin => {
      if (isLogin != null) {
        return this.router.navigate(['/home']);
      }
    });

    return true;
  }

}
