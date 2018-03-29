import { Component } from '@angular/core';



import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { MembersPage } from '../members/members';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MembersPage;
  tab3Root = ListPage;

  constructor() {

  }
}
