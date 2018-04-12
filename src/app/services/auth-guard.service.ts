import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate, OnDestroy {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.afAuth.authState.subscribe(result => {
      if (result == null) {
          return this.router.navigate(['/login']);
        }
    });

    return true;
  }


  ngOnDestroy() {

  }
}
