import { Injectable, NgZone } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private ngZone: NgZone
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const authenticated = this.auth.authState();
    if (authenticated) {
      return true;
    } else {

      // this.ngZone.run(() => {
      //   this.router.navigateByUrl('/auth/signup');
      // });
      return false;
    }
  }


}