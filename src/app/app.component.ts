import { Component } from '@angular/core';
import { LoginBoxComponent } from './login/loginbox/loginbox.component';
import { ErrBoxComponent } from './login/errorBox/errbox.component';
import { SBoxComponent } from './login/successBox/sbox.component';
import { PersonpageComponent } from './userList/personpage/personpage.component';
import { User } from './shared/models/user.interface';
import { RouterOutlet } from '@angular/router';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginBoxComponent, ErrBoxComponent, SBoxComponent, PersonpageComponent, RouterOutlet],
  providers: [NavigationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Login';
  public statusLogin = false;
  public errorCredential = true;
  public lastId: number = -2;
  public users: User[] = [];
  

  public setStatus(status: boolean): void {
    this.statusLogin = status;
    if(!status) {
      this.errorCredential = false;
    } else {
      this.errorCredential = true;
    }
  }

  public logout(): void {
    this.statusLogin = false;
  }

}
