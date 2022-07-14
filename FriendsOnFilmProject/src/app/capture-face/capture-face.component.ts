import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-capture-face',
  templateUrl: './capture-face.component.html',
  styleUrls: ['./capture-face.component.css']
})
export class CaptureFaceComponent implements OnInit {

  webcamImage: WebcamImage | undefined;

  constructor(private userService: UserService) { }

  returnedData: any;

  name: any;

  ngOnInit(): void {
  }

  public async handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    let err: string;

    this.userService.isExistingUser(webcamImage.imageAsBase64).subscribe(data => {
      this.name = data;
      console.log('Server responded with name: ' + data);
    });
  }
}
