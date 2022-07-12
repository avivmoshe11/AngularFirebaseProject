import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.user$.pipe(
      map((user) => {
        if (state.url === '/login') {
          if (user) {
            return this.router.parseUrl('/dashboard');
          }

          return true;
        }

        if (!user) {
          return this.router.parseUrl('/login');
        }

        return true;
      })
    );
  }

  constructor(private authService: AuthService, private router: Router) {}
}
