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
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { ErrorComponent } from './error/error.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import {ErrorStateMatcher} from '@angular/material/core';


import {SignUpComponent} from './Sign-Up-Page/Sign-up.component';
import { headerComponent } from './Sign-Up-Page/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    MainPageComponent,
    CaptureFaceComponent,
    ViewPhotosComponent,
    LoadingScreenComponent,
    ErrorComponent,
    NavigationBarComponent,
    SignUpComponent,
    headerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    WebcamModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
