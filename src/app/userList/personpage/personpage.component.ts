import { Component } from '@angular/core';
import { PersonlistComponent } from '../personlist/personlist.component';
import { EditpageComponent } from '../editpage/editpage.component';
import { UserlistService } from '../../userlist.service';
import { RouterOutlet } from '@angular/router';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-personpage',
  standalone: true,
  imports: [PersonlistComponent, EditpageComponent, RouterOutlet],
  providers: [UserlistService],
  templateUrl: './personpage.component.html',
  styleUrl: './personpage.component.scss'
})
export class PersonpageComponent {
  public lastId: number = -2;  

  constructor (
    private navigateSvc: NavigationService
  ) {}
  
  public enterEdit(id: number): void {
    this.lastId = id;
  }

  public resetId() {
    this.lastId = -2;
  }

  public goToList() {
    this.navigateSvc.goToList();
  }

}
