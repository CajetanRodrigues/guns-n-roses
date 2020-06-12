import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from './../providers/auth.service';
import { ArtistsService } from './../providers/artists.service';
import { PlaylistsService } from './../providers/playlists.service';
import { Component } from '@angular/core';
import {device} from 'src/device/device';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  playlists: any = [];
  artists = [];
  playlistsFlag = true;
  artistsFlag = false;
  albumsFlag = false;
  token = '';

  constructor(private playlistsService: PlaylistsService,
              private artistsService: ArtistsService,
              private authService: AuthService, private navController: NavController,
              private toastController: ToastController) {
                console.log("************",device.deviceid);
                this.authService.fetchToken().subscribe((tokendData) => {
      this.token = tokendData.access_token;

      this.playlistsService.fetchUserPlaylists(tokendData.access_token)
      .subscribe((data) => {
        this.playlists = data.items;
        console.log(data);
      });
      this.artistsService.fetchArtists(tokendData.access_token)
      .subscribe((data) => {
        this.artists = data.artists.items;
        console.log(data.artists.items);
      });

    });




  }
  async presentToast(tokenData) {
    const toast = await this.toastController.create({
      message: 'Token ' + tokenData,
      duration: 2000
    });
    toast.present();
  }
  openPlaylist(id: string) {
      this.navController.navigateForward('playlist/' + id);
  }

  segmentChanged(event: any){
    console.log(event);

    if (event.detail.value === 'playlists'){
      this.playlistsFlag = true;
      this.artistsFlag = false;
      this.albumsFlag = false;
    } else if (event.detail.value === 'artists') {
      this.playlistsFlag = false;
      this.artistsFlag = true;
      this.albumsFlag = false;
    } else {
      this.playlistsFlag = false;
      this.artistsFlag = false;
      this.albumsFlag = true;
    }
    console.log(this.playlistsFlag + '' + this.artistsFlag + '' + this.albumsFlag);
  }

}
