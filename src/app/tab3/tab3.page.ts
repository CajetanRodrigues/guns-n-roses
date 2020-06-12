import { PlaylistsService } from './../providers/playlists.service';
import { AuthService } from './../providers/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  playlists = [];
  constructor(private authService: AuthService, private playlistsService: PlaylistsService) {
    this.authService.fetchToken().subscribe((tokendData) => {
      this.playlistsService.fetchUserPlaylists(tokendData.access_token)
      .subscribe((data) => {
        this.playlists = data.items;
        console.log(data);
      });
    });
  }

}
