import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routesList } from './routes.enum';

@Injectable()
export class NavigationService {

  constructor(private router: Router) { }

  public goToLogin(): void {
    this.router.navigate([routesList.Login]);
  }

  public goToPersons(): void {
    this.router.navigate([routesList.Persons]);
  }

  public goToList(): void {
    this.router.navigate([routesList.Persons, routesList.List]);
  }

  public goToEdit(id: number): void {
    this.router.navigate([routesList.Persons, routesList.Edit, id]);
  }

}

