import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './pages/Main/Main.component';
import { AboutusComponent } from './pages/Aboutus/Aboutus.component';
import { ServicesComponent } from './pages/Services/Services.component';
import { Services2Component } from './pages/Services2/Services2.component';
import { ThreeComponent } from './pages/three/three.component';

@NgModule({
  declarations: [		
      AppComponent,
      NavbarComponent,
      PagesComponent,
      MainComponent,
      ServicesComponent,
      AboutusComponent,
      Services2Component,
      ThreeComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
