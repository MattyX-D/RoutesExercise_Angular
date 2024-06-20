import { Routes } from '@angular/router';
import { NavigationService } from './navigation.service';
import { routesList } from './routes.enum';
import { PersonpageComponent } from './shared/personpage/personpage.component';

export const routes: Routes = [
    { path: routesList.Login, loadChildren: () => import('./shared/loginbox/loginbox.routes').then(m => m.routes) },
    { path: routesList.Persons, component: PersonpageComponent, loadChildren: () => import('./shared/personpage/personpage.routes').then(m => m.routes) },
    { path: '**',  redirectTo: routesList.Login },
];
