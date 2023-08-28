import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthloginComponent } from './authlogin/authlogin.component';
import { AuthregisterComponent } from './authregister/authregister.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
		children: [
			{ path: 'login', component: AuthloginComponent },
			{ path: 'register', component: AuthregisterComponent }
		]
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
