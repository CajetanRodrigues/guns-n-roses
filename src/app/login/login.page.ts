import { Component, OnInit } from '@angular/core';
import { SpotifyAuth } from '@ionic-native/spotify-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  accessToken = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  authWithSpotify() {
    // const config = {
    //   clientId: "bdf1ef6a64c0498a87a9ed6d9040845a",
    //   redirectUrl: "http://localhost:8888/callback",
    //   scopes: ['user-read-private', 'user-read-email', 'ugc-image-upload', 'user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing', 'streaming', 'app-remote-control', 'playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-public', 'playlist-modify-private', 'user-library-modify', 'user-library-read', 'user-top-read', 'user-read-playback-position', 'user-read-recently-played', 'user-follow-read', 'user-follow-modify'], // see Spotify Dev console for all scopes
    //   tokenExchangeUrl: "http://18.181.189.89:8888/exchange",
    //   tokenRefreshUrl: "http://18.181.189.89:8888/refresh",
    // };

    // SpotifyAuth.authorize(config)
    //   .then(({ accessToken, expiresAt }) => {
    //     this.accessToken = accessToken;
    //     console.log(`Got an access token, its ${accessToken}!`);
    //     console.log(`Its going to expire in ${expiresAt - Date.now()}ms.`);
    //   });
      this.router.navigateByUrl('tab1')
  }

}
