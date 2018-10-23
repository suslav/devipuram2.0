import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import{FormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutdevipuramComponent } from './aboutdevipuram/aboutdevipuram.component';
import { AboutgurujiComponent } from './aboutguruji/aboutguruji.component';
import { EventsComponent } from './events/events.component';
import { DtvComponent } from './dtv/dtv.component';
import { RitualsComponent } from './rituals/rituals.component';
import { SrividyaComponent } from './srividya/srividya.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,   
    HeaderComponent,
    DashboardComponent,
    AboutdevipuramComponent,
    AboutgurujiComponent,
    EventsComponent,
    DtvComponent,
    RitualsComponent,
    SrividyaComponent,
    PhotogalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MatTabsModule,
     MDBBootstrapModule.forRoot(),
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
