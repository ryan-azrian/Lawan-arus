import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { ProfilPage } from '../profil/profil';
import { HomePage } from '../home/home';
import { SumbangPage } from '../sumbang/sumbang';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SumbangPage;
  tab3Root = ListPage;
  tab4Root = ProfilPage;

  constructor() {

  }
}
