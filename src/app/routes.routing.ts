import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './pages/Aboutus/Aboutus.component';
import { ContactComponent } from './pages/Contact/Contact.component';
import { MainComponent } from './pages/Main/Main.component';
import { PagesComponent } from './pages/pages.component';


export const appRoutes: Routes = [
  {
    path : '',
    component : PagesComponent,
    loadChildren : () => import('./pages/pages.module').then(m => m.PagesModule)
  }

];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule],
})
export class AppRoutingModule{
}

