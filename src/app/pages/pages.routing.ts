import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './Aboutus/Aboutus.component';
import { ContactComponent } from './Contact/Contact.component';
import { MainComponent } from './Main/Main.component';
import { PagesComponent } from './pages.component';


export const appRoutes: Routes = [
  {
    path :'',
    component : MainComponent,
  },
  {
    path :'about-us',
    component : AboutusComponent,
  },
  {
    path :'contact-us',
    component : ContactComponent,
  },
];

@NgModule({
  imports : [RouterModule.forChild(appRoutes)],
  exports : [RouterModule],
})
export class PagesRoutingModule{
}

