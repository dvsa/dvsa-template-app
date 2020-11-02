import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { LogoutBasePageComponent } from '../shared/classes/logout-base-page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends LogoutBasePageComponent {

  constructor(
    public platform: Platform,
    public authenticationProvider: AuthenticationProvider,
    public alertController: AlertController,
    public router: Router,
  ) {
    super(platform, authenticationProvider, alertController, router, true);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

}
