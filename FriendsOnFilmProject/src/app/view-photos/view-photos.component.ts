import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-view-photos',
  templateUrl: './view-photos.component.html',
  styleUrls: ['./view-photos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewPhotosComponent implements OnInit {

  constructor(private photosService: PhotosService) {
  }
  
  ngOnInit(): void {
    this.loadImages();
  }

  private photos: string[] = [];

  public async loadImages(): Promise<void> {
    this.photosService.getPhotos().subscribe(data => {
      this.photos = JSON.parse(data);
      this.displayImages();
    });
  }

  public displayImages(): void {
    const gallery = document.getElementById('gallery');

    if (gallery !== null) {

      const loadingElement = document.getElementById('loadingPhotos');
      if (loadingElement !== null) loadingElement.style.display = 'none';

      this.photos.forEach((photoBase64: string) => {
        const imgElement = document.createElement("img");
        imgElement.src = 'data:image/jpeg;base64,' + photoBase64;
        imgElement.setAttribute("class", "photos photosContainer");
        gallery.appendChild(imgElement);
      });
    }
  }
}
