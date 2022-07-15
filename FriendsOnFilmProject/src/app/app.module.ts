import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CaptureFaceComponent } from './capture-face/capture-face.component';
import { CameraComponent } from './camera/camera.component';
import { WebcamModule} from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';
import { ViewPhotosComponent } from './view-photos/view-photos.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component'

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    MainPageComponent,
    CaptureFaceComponent,
    ViewPhotosComponent,
    LoadingScreenComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
