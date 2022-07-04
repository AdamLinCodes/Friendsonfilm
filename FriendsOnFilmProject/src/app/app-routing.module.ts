import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptureFaceComponent } from './capture-face/capture-face.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path:'',
    component: MainPageComponent
  },
  {
    path: 'capture-face',
    component: CaptureFaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
