import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard  {

	constructor(private router: Router, private _cookie: CookieService){}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		
		const isOk: boolean = this._cookie.check('_at');

		// if isOk is false, redirect to login
		if (!isOk) {
			this.router.navigateByUrl('/auth/login');
		}

		return true;

  }
}