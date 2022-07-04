import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CaptureFaceComponent } from './capture-face/capture-face.component';
import { CameraComponent } from './camera/camera.component';
import { WebcamModule} from 'ngx-webcam';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CaptureFaceComponent,
    CameraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
