import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICredentials } from 'src/interfaces';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  
  public async submitCredentials(event: any): Promise<void> {

    const credentials: ICredentials = {
      email: event.srcElement[0].value,
      username: event.srcElement[1].value,
      password: event.srcElement[2].value,
    };

    this.userService.sendCredentials(credentials).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/error']);
  }
}