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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MainComponent } from './pages/Main/Main.component';
import { AboutusComponent } from './pages/Aboutus/Aboutus.component';



import {SwiperModule} from 'swiper/angular';
import { ContactComponent } from './pages/Contact/Contact.component';

@NgModule({
  declarations: [		
      AppComponent,
      NavbarComponent,
      PagesComponent,
      MainComponent,
      AboutusComponent,
      ContactComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
