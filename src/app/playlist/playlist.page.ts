import { PlaylistsService } from './../providers/playlists.service';
import { AuthService } from './../providers/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AppService } from '../app.service';
import { PlayerService } from '../providers/player.service';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
  songPlaying = true;
  playlistCover = '';
  tracks = [];
  playlistId: any;
  currentSongName = '';
  currentSongAlbum = '';
  currentPlayingtrack: any;
  currentTrack: MediaObject;
  playing: boolean;
  constructor(private authService: AuthService, private playlistService: PlaylistsService, private navController: NavController,
              private route: ActivatedRoute, private appService: AppService, private playerService: PlayerService,private media: Media
              ) {
                
                this.route.params.subscribe((params: Params) => {
                  this.playlistId = params['id'];
                  this.authService.fetchToken()
                  .subscribe((tokenData) => {

                    this.playlistService.fetchPlaylist(tokenData.access_token, params['id'])
                    .subscribe((data: any) => {
                      console.log(data);
                      this.tracks = data.items;
                    });
              
                    this.playlistService.fetchPlaylistCover(tokenData.access_token, params['id'])
                    .subscribe((data: any) => {
                      console.log(data);
                      this.playlistCover  = data[0].url;
                    });
                  });
                })
   
   }

  ngOnInit() {
  }
  navigatePrev() {
    this.navController.back();
  }
  togglePlayPause(status) {
    this.authService.fetchToken().subscribe((tokenData) => {
      if(this.songPlaying) {
        this.songPlaying = false;
        this.playerService.pauseUserPlayback(tokenData.access_token).subscribe();
      } else {
        this.songPlaying = true;
        this.playSong(this.currentPlayingtrack);
      }
    });
  }

  playSong(track) {
    console.log(track.track.preview_url);
    this.currentTrack = this.media.create(track.track.preview_url);
    this.currentTrack.onSuccess.subscribe(() => {
      this.playing = false;
      this.currentTrack.play();
    });
    this.currentTrack.onError.subscribe(error => {
      this.playing = false;
    });
    this.currentTrack.play();
    this.currentSongName  = track.track.artists[0].name;
    this.currentSongAlbum = track.track.album.name;
    this.currentPlayingtrack = track;
    this.authService.fetchToken()
    .subscribe((tokenData) => {
      
      this.playerService.startResumeUserPlayback(tokenData.access_token, track.track.uri)
      .subscribe((data) => {
        console.log(data);
      });
    });
  }
  pauseSong() {
    this.authService.fetchToken()
    .subscribe((tokenData) => {
      this.playerService.pauseUserPlayback(tokenData.access_token)
      .subscribe((data) => {
        console.log(data);
      });
    });
  }

}
