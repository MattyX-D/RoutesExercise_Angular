import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserlistService } from '../../userlist.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { routesList } from '../../routes.enum';

@Component({
  selector: 'app-editpage',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  providers: [],
  templateUrl: './editpage.component.html',
  styleUrl: './editpage.component.scss'
})
export class EditpageComponent implements OnInit {
  public id: number = 0;
  public titleString: string = "";
  public buttonValue: string = "";
  public userFg = new FormGroup({
    name: new FormControl<string>("", Validators.required),
    age: new FormControl<number>(0, Validators.required),
    birthdate: new FormControl<string>("", Validators.required),
    address: new FormControl<string>("", Validators.required)
  })

  constructor(
    private userListSvc: UserlistService,
    private router: Router,
    private route: ActivatedRoute //questa
  ) { 
    console.log("stampo state")
    console.log(router.getCurrentNavigation()?.extras.state)
    console.log("stampo queryparams")
    console.log(router.getCurrentNavigation()?.extras.queryParams)
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!) //Questa
    if(this.id == -1) {
      this.titleString = "Aggiungi un nuovo utente";
      this.buttonValue = "Aggiungi";
    } else if(this.id >= 0) {
      this.titleString = "Modifica un utente";
      this.buttonValue = "Modifica";
      let userInfo = this.userListSvc.getUser(this.id);
      const patchedUserInfo = {
        ...userInfo,
        birthdate: userInfo.birthDate.toISOString().substring(0, 10)
      };
      this.userFg.patchValue(patchedUserInfo);
    }
  }

  public editReq() {
    let values = this.userFg.value;
    if (values.name && values.age && values.birthdate && values.address) {
      if (this.id == -1) {
        this.userListSvc.newUser(values.name, values.age, new Date(values.birthdate), values.address);
      } else {
        this.userListSvc.editUser(this.id, values.name, values.age, new Date(values.birthdate), values.address);
      }
    }
    this.router.navigate([routesList.Persons]);
  }

  public deleteReq() {
    this.userListSvc.deleteUser(this.id);
    this.router.navigate([routesList.Persons]);
  }

}
