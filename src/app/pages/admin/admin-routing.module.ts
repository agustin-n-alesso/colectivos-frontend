import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminLocalidadesComponent } from './components/admin-localidades/admin-localidades.component';
import { AdminViajesComponent } from './components/admin-viajes/admin-viajes.component';
import { AdminPasajesComponent } from './components/admin-pasajes/admin-pasajes.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		canActivate: [AdminGuard],
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'localidades' },
			{ path: 'localidades', component: AdminLocalidadesComponent  },
			{ path: 'viajes', component: AdminViajesComponent  },
			{ path: 'pasajes', component: AdminPasajesComponent  },
			{ path: '**', pathMatch: 'full', redirectTo: '' }
		]
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
