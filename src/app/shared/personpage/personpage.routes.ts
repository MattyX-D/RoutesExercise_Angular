import { Routes } from '@angular/router';
import { PersonpageComponent } from './personpage.component';
import { PersonlistComponent } from '../personlist/personlist.component';
import { routesList } from '../../routes.enum';


export const routes: Routes = [
    { path: '',  redirectTo: routesList.List, pathMatch: 'full' },
    { path: routesList.List,  loadChildren: () => import('../personlist/personlist.routes').then(m => m.routes) },
    { path: routesList.Edit+'/:id',  loadChildren: () => import('../editpage/editpage.routes').then(m => m.routes) },
    { path: '**',  redirectTo: routesList.List },
];
