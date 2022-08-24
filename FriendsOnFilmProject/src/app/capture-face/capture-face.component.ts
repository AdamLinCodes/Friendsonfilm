import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-capture-face',
  templateUrl: './capture-face.component.html',
  styleUrls: ['./capture-face.component.css']
})
export class CaptureFaceComponent implements OnInit {

  webcamImage: WebcamImage | undefined;

  constructor(private userService: UserService, private router: Router) { }

  public returnedData: any;

  public name: any;

  ngOnInit(): void {
  }

  public async handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    let err: string;

    this.router.navigate(['/loading']);

    this.userService.isExistingFace(webcamImage.imageAsBase64).subscribe(data => {
      this.name = data;
      console.log('Server responded with name: ' + data);
      if (data != 'Unknown') {
        this.router.navigate(['/view-photos']);
      }
      else {
        alert(`Sorry, it looks like you don't have an account yet`);
        this.router.navigate(['/capture-face']);
      }
    });
  }
}
