import { Routes } from '@angular/router';
import { PersonlistComponent } from '../personlist/personlist.component';


export const routes: Routes = [
    { path: '',  component: PersonlistComponent },
    { path: '**',  redirectTo: '' },
];
