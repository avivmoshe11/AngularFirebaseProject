import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appSignOut]',
})
export class SignOutDirective {
  @HostListener('click', ['$event'])
  async clickHandle(e: MouseEvent) {
    e.preventDefault();

    await this.authService.logout();
    this.router.navigate(['/login']);
  }

  constructor(private authService: AuthService, private router: Router) {}
}
