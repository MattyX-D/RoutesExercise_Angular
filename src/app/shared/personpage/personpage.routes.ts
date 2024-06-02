import { Routes } from '@angular/router';
import { PersonpageComponent } from './personpage.component';
import { PersonlistComponent } from '../personlist/personlist.component';


export const routes: Routes = [
    { path: '',  redirectTo: 'list', pathMatch: 'full' },
    { path: 'list',  loadChildren: () => import('../personlist/personlist.routes').then(m => m.routes) },
    { path: 'edit/:id',  loadChildren: () => import('../editpage/editpage.routes').then(m => m.routes) },
    { path: '**',  redirectTo: 'list' },
];
