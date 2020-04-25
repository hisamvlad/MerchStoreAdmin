import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS
} from '@angular/common/http';

//suppress the reponse header is to send a special, conventional request header "X-Requested-With=XMLHttpRequest". 
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

const routes: Routes = [
  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginComponent 
  }
];

@NgModule({
  declarations: [ 
    AppComponent,
    NavBarComponent,
    LoginComponent
      ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }            
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
