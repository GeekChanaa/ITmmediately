import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
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
import { ServicesComponent as ServComponent} from './Services/Services.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../_services/interceptor.service';
import { ContactComponent } from './Contact/Contact.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
      ServComponent,
      TestiComponent,
      ContactComponent,

   ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    SwiperModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass:InterceptorService, multi : true},
    
  ],
  bootstrap: []
})
export class PagesModule { }
