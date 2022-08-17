import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICredentials } from 'src/interfaces';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  public userExists: boolean = true;

  onSubmit(event: any): void {
    const credentials: ICredentials = {
      username: event.srcElement[0].value,
      password: event.srcElement[1].value,
    }

    this.userService.checkCredentialsExist(credentials).subscribe(data => {
      this.userExists = JSON.parse(data);

      if (this.userExists) {
        this.router.navigate(['/capture-face']);
      } 
    });
  }
}
