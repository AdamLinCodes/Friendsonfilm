import { Component } from "@angular/core";
import { ICredentials } from "src/interfaces";
import { UserService } from "../services/user.service";

@Component({
  selector:'app-Sign-up',
  templateUrl:'./Sign-up.component.html',
  styleUrls:['./Sign-up.component.css']
})
export class SignUpComponent{

  constructor(private userservice: UserService) {}
  public showPassword: boolean = false;

  onSignUp(usernameInput: HTMLInputElement, passwordInput: HTMLInputElement,EmailInput:HTMLInputElement,passwordInput2:HTMLInputElement){
    const credentials:ICredentials ={
      email:EmailInput.value,
      username:usernameInput.value,
      password:passwordInput.value
    }
    this.userservice.getInfo(credentials).subscribe((data) => {
      //this is what happens when server's response is recieved by angular
      console.log(data);
    });
  };


  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
