import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard  {

	constructor(private router: Router){}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

		const isOk: boolean = true;

		// if isOk is false, redirect to login
		if (!isOk) {
			this.router.navigateByUrl('/auth/login');
		}

		return true;

  }
}