import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

var xhttp;

@Component({
  selector: 'app-capture-face',
  templateUrl: './capture-face.component.html',
  styleUrls: ['./capture-face.component.css']
})
export class CaptureFaceComponent implements OnInit {

  webcamImage: WebcamImage | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.sendPhotoToServer(webcamImage.imageAsDataUrl);
  }

  sendPhotoToServer(imageUrl: string) {
    console.log('the image has been sent to the server!');
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", imageUrl, true); 
    xhttp.setRequestHeader('Content-Type', 'text/plain');
    xhttp.send();
    
  }
}
