import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';
import { NavigationService } from '../../navigation.service';
import { ErrBoxComponent } from '../errorBox/errbox.component';

@Component({
  selector: 'app-loginbox',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ErrBoxComponent],
  providers: [LoginService], 
  templateUrl: './loginbox.component.html',
  styleUrl: './loginbox.component.scss'
})
export class LoginBoxComponent {
  public error = false;
  public imagePath = "../../assets/img.png";

  public constructor (
    private loginSvc: LoginService,
    private navigateSvc: NavigationService
  ) {}

  public fg = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>("")
  });

  public validateForm() {
    if(!this.fg.invalid) {
      if(this.loginSvc.validateLogin(this.fg.value.username, this.fg.value.password)) {
        this.navigateSvc.goToPersons();
        this.error = false;
      } else {
        this.error = true;
      }
    }
  }
  
}
