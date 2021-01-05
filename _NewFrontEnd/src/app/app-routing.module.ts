import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

// Import the routes

import { LoginComponent } from './login/login.component';
import { PlantListComponent } from './plant-list/plant-list.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'plantitems', component: PlantListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, PlantListComponent];
