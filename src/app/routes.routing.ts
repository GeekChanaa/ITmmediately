import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {  },
];

export const appRoutes: Routes = [
  {
    path :'',
    component : PagesComponent,
  }
];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule],
})
export class AppRoutingModule{
}

