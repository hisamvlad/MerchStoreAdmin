import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import {LoginService } from './services/login.service';

@NgModule({
  declarations: [ 
    AppComponent,
    NavBarComponent,
    LoginComponent
      ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
