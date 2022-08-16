import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICredentials } from 'src/interfaces';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public emailExists: boolean = true;
  public usernameExists: boolean = true;
  public passwordExists: boolean = true;
  public passwordsMatch: boolean = true;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  public checkPasswordsMatch(password: string, confirm: string): void {
    this.passwordsMatch = password === confirm;
  }

  onSubmit(event: any): void {
    this.checkPasswordsMatch(event.srcElement[2].value, event.srcElement[3].value);

    const credentials: ICredentials = {
      email: event.srcElement[0].value,
      username: event.srcElement[1].value,
      password: event.srcElement[2].value,
    }

    if (this.passwordsMatch) {
      this.userService.sendCredentials(credentials).subscribe(data => {
        const responseObject: any = JSON.parse(data);

        if (!responseObject['emailExists'] && !responseObject['usernameExists'] && !responseObject['passwordExists']) {
          console.log(responseObject);
          this.router.navigate(['/error']);
        }
        else {
          this.emailExists = !responseObject['emailExists'];
          this.usernameExists = !responseObject['usernameExists'];
          this.passwordExists = !responseObject['passwordExists'];
        }
      });
    }
  }
}