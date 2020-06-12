import { AuthService } from './../providers/auth.service';
import { SearchService } from './../providers/search.service';
import { Component, ViewChild } from '@angular/core';
import { BrowseService } from '../providers/browse.service';
import { ModalController, IonSearchbar } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  categories = [];
  searchFlag = false;
  searchingFlag = false;
  searchValue = '';
  searchResults = [];
  constructor(private browseService: BrowseService,
              public modalController: ModalController,
              private searchService: SearchService,
              private authService: AuthService) {
                this.authService.fetchToken()
                .subscribe((tokenData) => {
                  this.browseService.fetchCategories(tokenData.access_token)
                  .subscribe((data) => {
                    this.categories = data.categories.items;
                    console.log(data.categories.items);
                  });
                })
    
  }
  onFocus() {
    this.searchFlag = true;
  }
  onBlur() {
    console.log('lost focus')
    this.searchFlag = false;
  }
  searchFunction() {
    if (this.searchValue !== '') {
      this.searchingFlag = true;
      this.searchService.search(this.searchValue)
      .subscribe((data) => {
        this.searchResults = data;
        console.log(data);
      });

    } else {
      this.searchingFlag = false;
    }
    console.log(this.searchValue);
  }
}
