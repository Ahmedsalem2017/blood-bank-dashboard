import { UserService } from './user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(
    private user: UserService,
    private router: Router
  ) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.user.user.admin === false || this.user.user.admin == null) {
       this.router.navigate(['/denied']);
    }
    return true;
  }
}
