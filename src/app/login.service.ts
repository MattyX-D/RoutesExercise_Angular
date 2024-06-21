import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  public validateLogin(username: string | null | undefined, password: string | null | undefined): boolean {
    if(username === "admin" && password === "admin")
      return true;
    return false;
  }

}
