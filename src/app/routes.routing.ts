import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ThreeComponent } from './pages/three/three.component';

const routes: Routes = [
  {  },
];

export const appRoutes: Routes = [
  {
    path :'',
    component : PagesComponent,
  },
  {
    path :'3D',
    component : ThreeComponent,
  }
];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule],
})
export class AppRoutingModule{
}

