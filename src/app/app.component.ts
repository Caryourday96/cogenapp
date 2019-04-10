import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
   {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle'
    },
    {
      title: 'Carbon Dioxide',
      url: '/carbon',
      icon: 'analytics'
    },
    {
      title: 'Electricity',
      url: '/electricity',
      icon: 'outlet'
    },
    {
      title: '3D Chart',
      url: '/chart3d',
      icon: 'pie'
    },
    {
      title: 'Login Page',
      url: '/login',
      icon: 'log-in'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}