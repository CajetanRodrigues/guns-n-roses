(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playlist-playlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-icon (click)=\"navigatePrev()\"  slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n    <ion-title>Playlist</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"playlist-cover-container\">\n<img class=\"playlist-cover\" src=\"{{playlistCover}}\">\n</div>\n  <ion-grid>\n    <ion-row (click)=\"playSong(track)\" *ngFor=\"let track of tracks\">\n        <ion-col size=\"2\">\n          <img class=\"track-cover\" src=\"{{track.track.album.images[0].url}}\">\n        </ion-col>\n        <ion-col size=\"10\">\n          <div class=\"song-big\" style=\"color:#92949c\">{{track.track.album.name}}</div>\n          <div class=\"album\" style=\"color:#ffc409\">{{track.track.artists[0].name}}</div>.\n          <div class=\"song\" style=\"color:#92949c\">{{track.track.album.name}}</div>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n  \n  <div class=\"footer\">\n<ion-footer mode=\"ios\">\n  <ion-toolbar id=\"container\">\n    <ion-grid>\n    <ion-row>\n        <ion-col size=\"2\">\n          <img class=\"track-cover\" src=\"https://i.scdn.co/image/608c7b23420c9556a7eabd9097f7e171a91d3871\">\n        </ion-col>\n        <ion-col size=\"8\">\n          <div class=\"song-playing\" style=\"color:#92949c\">{{currentSongName}}</div>\n          <div class=\"album-playing\" style=\"color:#ffc409\">{{currentSongAlbum}}</div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-icon *ngIf=\"!songPlaying\" name=\"play\" (click)=\"togglePlayPause()\"></ion-icon>\n          <ion-icon *ngIf=\"songPlaying\" name=\"pause\" (click)=\"togglePlayPause()\"></ion-icon>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n</div>");

/***/ }),

/***/ "./src/app/playlist/playlist-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/playlist/playlist-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PlaylistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPageRoutingModule", function() { return PlaylistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _playlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlist.page */ "./src/app/playlist/playlist.page.ts");




const routes = [
    {
        path: '',
        component: _playlist_page__WEBPACK_IMPORTED_MODULE_3__["PlaylistPage"]
    }
];
let PlaylistPageRoutingModule = class PlaylistPageRoutingModule {
};
PlaylistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlaylistPageRoutingModule);



/***/ }),

/***/ "./src/app/playlist/playlist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/playlist/playlist.module.ts ***!
  \*********************************************/
/*! exports provided: PlaylistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPageModule", function() { return PlaylistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _playlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playlist-routing.module */ "./src/app/playlist/playlist-routing.module.ts");
/* harmony import */ var _playlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playlist.page */ "./src/app/playlist/playlist.page.ts");







let PlaylistPageModule = class PlaylistPageModule {
};
PlaylistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _playlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaylistPageRoutingModule"]
        ],
        declarations: [_playlist_page__WEBPACK_IMPORTED_MODULE_6__["PlaylistPage"]]
    })
], PlaylistPageModule);



/***/ }),

/***/ "./src/app/playlist/playlist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/playlist/playlist.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".playlist-cover {\n  display: block;\n  margin: auto;\n  width: 200px;\n  height: 200px;\n}\n\n.playlist-cover-container {\n  margin: 20px 20px 5px 20px;\n}\n\n.track-cover {\n  width: 100%;\n  margin: 0;\n}\n\n.album {\n  font-size: 15px;\n  display: inline-block;\n}\n\n.song {\n  font-size: 13px;\n  display: inline-block;\n}\n\n.song-playing {\n  font-size: 17px;\n  display: block;\n  font-weight: bold;\n}\n\n.album-playing {\n  font-size: 14px;\n  display: inline-block;\n  font-weight: bold;\n}\n\n.song-big {\n  font-size: 16px;\n  display: block;\n}\n\nion-icon {\n  zoom: 2;\n  margin-left: 10px;\n}\n\n.footer {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n}\n\n#container {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3QvQzpcXFVzZXJzXFxtYXZlclxcRGVza3RvcFxcZ3Vucy1uLXJvc2VzL3NyY1xcYXBwXFxwbGF5bGlzdFxccGxheWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wbGF5bGlzdC9wbGF5bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNRSjs7QUROQTtFQUNJLE9BQUE7RUFDQSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFdBQUE7QUNVSjs7QURSRTtFQUNFLFdBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0L3BsYXlsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5bGlzdC1jb3ZlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLnBsYXlsaXN0LWNvdmVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweCA1cHggMjBweDtcclxufVxyXG4udHJhY2stY292ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmFsYnVtIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uc29uZyB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnNvbmctcGxheWluZyB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5hbGJ1bS1wbGF5aW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zb25nLWJpZyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5pb24taWNvbiB7XHJcbiAgICB6b29tOiAyLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uZm9vdGVye1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIH1cclxuICAjY29udGFpbmVyIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbiIsIi5wbGF5bGlzdC1jb3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnBsYXlsaXN0LWNvdmVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDVweCAyMHB4O1xufVxuXG4udHJhY2stY292ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWxidW0ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNvbmcge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNvbmctcGxheWluZyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWxidW0tcGxheWluZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNvbmctYmlnIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWljb24ge1xuICB6b29tOiAyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/playlist/playlist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/playlist/playlist.page.ts ***!
  \*******************************************/
/*! exports provided: PlaylistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPage", function() { return PlaylistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_playlists_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/playlists.service */ "./src/app/providers/playlists.service.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _providers_player_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/player.service */ "./src/app/providers/player.service.ts");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js");









let PlaylistPage = class PlaylistPage {
    constructor(authService, playlistService, navController, route, appService, playerService, media) {
        this.authService = authService;
        this.playlistService = playlistService;
        this.navController = navController;
        this.route = route;
        this.appService = appService;
        this.playerService = playerService;
        this.media = media;
        this.songPlaying = true;
        this.playlistCover = '';
        this.tracks = [];
        this.currentSongName = '';
        this.currentSongAlbum = '';
        this.route.params.subscribe((params) => {
            this.playlistId = params['id'];
            this.authService.fetchToken()
                .subscribe((tokenData) => {
                this.playlistService.fetchPlaylist(tokenData.access_token, params['id'])
                    .subscribe((data) => {
                    console.log(data);
                    this.tracks = data.items;
                });
                this.playlistService.fetchPlaylistCover(tokenData.access_token, params['id'])
                    .subscribe((data) => {
                    console.log(data);
                    this.playlistCover = data[0].url;
                });
            });
        });
    }
    ngOnInit() {
    }
    navigatePrev() {
        this.navController.back();
    }
    togglePlayPause(status) {
        this.authService.fetchToken().subscribe((tokenData) => {
            if (this.songPlaying) {
                this.songPlaying = false;
                this.playerService.pauseUserPlayback(tokenData.access_token).subscribe();
            }
            else {
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
        this.currentSongName = track.track.artists[0].name;
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
};
PlaylistPage.ctorParameters = () => [
    { type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _providers_playlists_service__WEBPACK_IMPORTED_MODULE_1__["PlaylistsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
    { type: _providers_player_service__WEBPACK_IMPORTED_MODULE_7__["PlayerService"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__["Media"] }
];
PlaylistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-playlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./playlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./playlist.page.scss */ "./src/app/playlist/playlist.page.scss")).default]
    })
], PlaylistPage);



/***/ })

}]);
//# sourceMappingURL=playlist-playlist-module-es2015.js.map