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
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';


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
    SignInComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    WebcamModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
