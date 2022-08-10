import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptureFaceComponent } from './capture-face/capture-face.component';
import { ErrorComponent } from './error/error.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewPhotosComponent } from './view-photos/view-photos.component';

const routes: Routes = [
  {
    path:'',
    component: MainPageComponent
  },
  {
    path: 'capture-face',
    component: CaptureFaceComponent
  },
  {
    path: 'view-photos',
    component: ViewPhotosComponent
  },
  {
    path: 'loading',
    component: LoadingScreenComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
