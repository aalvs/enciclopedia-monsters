import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MonstrosComponent } from './components/monstros/monstros.component';
import { LideresComponent } from './components/lideres/lideres.component';
import { MedalhasComponent } from './components/medalhas/medalhas.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiResourceService } from './shared/services/api-resource.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MonstrosComponent,
    LideresComponent,
    MedalhasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
