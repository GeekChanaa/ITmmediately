import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './pages/Aboutus/Aboutus.component';
import { MainComponent } from './pages/Main/Main.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {  },
];

export const appRoutes: Routes = [
  {
    path :'',
    component : PagesComponent,
    children : [
      {
        path :'',
        component : MainComponent,
      },
      {
        path :'about-us',
        component : AboutusComponent,
      },
    ]
  },

];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule],
})
export class AppRoutingModule{
}

