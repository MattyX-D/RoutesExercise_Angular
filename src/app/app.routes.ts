import { Routes } from '@angular/router';
import { routesList } from './routes.enum';
import { PersonpageComponent } from './userList/personpage/personpage.component';

export const routes: Routes = [
    { path: routesList.Login, loadChildren: () => import('./login/loginbox/loginbox.routes').then(m => m.routes) },
    { path: routesList.Persons, component: PersonpageComponent, loadChildren: () => import('./userList/personpage/personpage.routes').then(m => m.routes) },
    { path: '**',  redirectTo: routesList.Login },
];
