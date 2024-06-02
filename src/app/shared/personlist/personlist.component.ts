import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';
import { PersonComponent } from '../person/person.component';
import { UserlistService } from '../../userlist.service';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-personlist',
  standalone: true,
  imports: [PersonComponent],
  templateUrl: './personlist.component.html',
  styleUrl: './personlist.component.scss'
})
export class PersonlistComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private userListSvc: UserlistService,
    private navigateSvc: NavigationService
  ) {}
  
  ngOnInit(): void {
    this.users = this.userListSvc.getUsers();
  }

  public edit(id: number): void {
    this.navigateSvc.goToEdit(id)
  }

  public add() {
    this.navigateSvc.goToEdit(-1);
  }


}
