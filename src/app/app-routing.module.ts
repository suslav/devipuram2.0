import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutdevipuramComponent } from 'src/app/aboutdevipuram/aboutdevipuram.component';
import { AboutgurujiComponent } from './aboutguruji/aboutguruji.component';
import { ContactComponent } from './contact/contact.component';
import { DtvComponent } from 'src/app/dtv/dtv.component';
import { EventsComponent } from './events/events.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { SrividyaComponent } from 'src/app/srividya/srividya.component';
import { RitualsComponent } from './rituals/rituals.component';
const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: DashboardComponent },
{ path: 'aboutdevipuram', component: AboutdevipuramComponent },
{ path: 'aboutguruji', component: AboutgurujiComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'dtv', component: DtvComponent },
{ path: 'events', component: EventsComponent },
{ path: 'photogallery', component: PhotogalleryComponent },
{ path: 'srividya', component: SrividyaComponent },
{ path: 'rituals', component: RitualsComponent }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
