import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-photos',
  templateUrl: './view-photos.component.html',
  styleUrls: ['./view-photos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewPhotosComponent implements OnInit {

  constructor(private userService: UserService) {
  }
  
  ngOnInit(): void {
    this.loadImages();
  }

  private photos: string[] = [];

  public async loadImages(): Promise<void> {
    this.userService.getPhotos().subscribe(data => {
      this.photos = JSON.parse(data);
      this.displayImages();
    });
  }

  public displayImages(): void {
    const gallery = document.getElementById('gallery');

    if (gallery !== null) {
      this.photos.forEach((photoBase64: string) => {
        const imgElement = document.createElement("img");
        imgElement.src = 'data:image/jpeg;base64,' + photoBase64;
        imgElement.setAttribute("class", "photos photosContainer");
        gallery.appendChild(imgElement);
      });
    }
  }
}
