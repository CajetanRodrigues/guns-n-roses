import { PlayerService } from './providers/player.service';
import { AuthService } from './providers/auth.service';
import { SearchService } from './providers/search.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { BrowseService } from './providers/browse.service';
import { AlbumsService } from './providers/albums.service';
import { AppService } from './app.service';
import { ArtistsService } from './providers/artists.service';
import { PlaylistsService } from './providers/playlists.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';

export function getWindow() { return window; }

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PlaylistsService,
    ArtistsService,
    AppService,
    AlbumsService,
    BrowseService,
    Keyboard,
    SearchService,
    AuthService,
    PlayerService,
    InAppBrowser,
  Media  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
