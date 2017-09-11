import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
//import { UserComponent } from './components/user.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
 //   { path: 'defect', component: UserComponent },
 //   { path: 'task', component: UserComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);