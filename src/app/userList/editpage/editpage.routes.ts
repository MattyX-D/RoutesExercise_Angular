import { Routes } from '@angular/router';
import { EditpageComponent } from './editpage.component';


export const routes: Routes = [
    { path: '',  component: EditpageComponent },
    { path: '**',  redirectTo: '' },
];
