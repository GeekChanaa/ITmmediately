import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Main/Main.component';
import { PagesComponent } from './pages.component';


export const appRoutes: Routes = [
  {
    path :'',
    component : MainComponent,
  },
  {
    path :'about-us',
    component : MainComponent,
  }
];

@NgModule({
  imports : [RouterModule.forChild(appRoutes)],
  exports : [RouterModule],
})
export class PagesRoutingModule{
}

