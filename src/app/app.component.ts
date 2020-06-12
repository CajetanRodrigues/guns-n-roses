import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from './app.service';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient,
    private appService: AppService,
    private authService: AuthService
  ) {
    this.initializeApp();
    setTimeout(() => {
      console.log('Changing playback now');
      this.authService.fetchToken()
      .subscribe((tokenData) => {
        console.log('HAHAHHAHA');
        this.http.put('https://api.spotify.com/v1/me/player', {
          device_ids: ['513b5aa0a7f43302f6ddcf5fc9de35823646e818'],
          play: true
        },
        {
          headers: new HttpHeaders(
            {
              Authorization: 'Bearer ' + tokenData.access_token
            })
        })
        .subscribe((data) => {
            console.log('Playback device activated!');
        });
      });

    }, 5000);


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
