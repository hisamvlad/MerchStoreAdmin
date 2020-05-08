import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { AppRouting } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AddNewMerchComponent } from './components/add-new-merch/add-new-merch.component';

import {LoginService } from './services/login.service';
import {AddMerchService} from './services/add-merch.service';
import {UploadImageService} from './services/upload-image.service';

import { authInterceptorProviders } from './helpers/auth.interceptor';

//suppress the reponse header is to send a special, conventional request header "X-Requested-With=XMLHttpRequest". 
// @Injectable()
// export class XhrInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     const xhr = req.clone({
//       headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
//     });
//     return next.handle(xhr);
//   }
// }

@NgModule({
  declarations: [ 
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HomeComponent,
    RegisterComponent,
    AddNewMerchComponent
   
      ],
  imports: [
    AppRouting,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    authInterceptorProviders,
    LoginService,
    AddMerchService,
    UploadImageService        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
