import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'merch-store-admin';

  // constructor(private app: LoginService, private http: HttpClient, private router: Router) {
  //   this.app.authenticate(undefined, undefined);
  // }
  // logout() {
  //   this.http.post('logout', {}).pipe(finalize(() => {
  //       this.app.authenticated = false;
  //       this.router.navigateByUrl('/login');

  //   })
  //     ).subscribe();
  // }

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) {}

  // First, we check isLoggedIn status using TokenStorageService, 
  // if it is true, we get user’s roles and set value for showAdminBoard & showModeratorBoard flag. 
  // They will control how template navbar displays its items.

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
