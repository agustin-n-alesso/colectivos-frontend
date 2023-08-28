import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
		path: '',
		pathMatch: 'full' ,
		redirectTo: 'home'
	},
  {
		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
	},
  {
		path: 'search',
		loadChildren: () => import ('./pages/search/search.module').then(m => m.SearchModule)
	},
	{
		path: 'admin',
		loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
	},
	{
		path: 'auth',
		loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
	},
  {
		path: '**',
		pathMatch: 'full',
		redirectTo: 'home'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
