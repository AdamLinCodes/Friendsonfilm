import { Component } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector:'app-Sign-up',
  templateUrl:'./Sign-up.component.html',
  styleUrls:['./Sign-up.component.css']
})
export class SignUpComponent{

  constructor(private userservice: UserService) {}
  public showPassword: boolean = false;

  onSignUp(usernameInput: HTMLInputElement, passwordInput: HTMLInputElement){

    this.userservice.getInfo(usernameInput.value, passwordInput.value).subscribe((data) => {
      //this is what happens when server's response is recieved by angular
      console.log(data);
    });
  };


  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}