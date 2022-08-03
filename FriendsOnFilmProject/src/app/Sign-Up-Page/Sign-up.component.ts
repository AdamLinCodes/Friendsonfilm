import { Component } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector:'app-Sign-up',
  templateUrl:'./Sign-up.component.html',
  styleUrls:['./Sign-up.component.css']
})
export class SignUpComponent{

  constructor(private userservice: UserService) {}
  Name='';
  Pass='';
  public showPassword: boolean = false;

  onSignUp(NameInput:HTMLInputElement, PassInput:HTMLInputElement){

    this.userservice.getInfo(NameInput.value, PassInput.value).subscribe((data) => {
      //this is what happens when server's response is recieved by angular
      console.log(data);
    });
  };


  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
