import { Routes } from '@angular/router';
import { NavigationService } from './navigation.service';
import { routesList } from './routes.enum';
import { PersonpageComponent } from './shared/personpage/personpage.component';

export const routes: Routes = [
    { path: 'login', loadChildren: () => import('./shared/loginbox/loginbox.routes').then(m => m.routes) },
    { path: 'persons', component: PersonpageComponent, loadChildren: () => import('./shared/personpage/personpage.routes').then(m => m.routes) },
    { path: '**',  redirectTo: 'login' },
];
