import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



import {SwiperModule} from 'swiper/angular';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { GetStartedComponent } from './Main/get-started/get-started.component';
import { HeaderComponent } from './Main/header/header.component';
import { HowItWorksComponent } from './Main/how-it-works/how-it-works.component';
import { ServicesComponent } from './Main/services/services.component';
import { TestimonialsComponent } from './Main/testimonials/testimonials.component';
import { MainComponent } from './Main/Main.component';
import { AboutComponent } from './Main/about/about.component';
import { AboutusComponent } from './Aboutus/Aboutus.component';
import { TestiComponent } from './Aboutus/testi/testi.component';

@NgModule({
  declarations: [	
      PagesComponent,
      GetStartedComponent,
      HeaderComponent,
      HowItWorksComponent,
      ServicesComponent,
      TestimonialsComponent,
      MainComponent,
      AboutComponent,
      AboutusComponent,
      TestiComponent
   ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
