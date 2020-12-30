import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedAppIndex = 0;
  public selectedCategoriesIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/blog',
      icon: 'home',
    },
    {
      title: 'Fitness',
      url: 'blog/categorie/fitness',
      icon: 'fitness',
    },
    {
      title: 'NUTRIȚIE',
      url: 'blog/categorie/nutritie',
      icon: 'nutrition',
    },
    {
      title: 'LIFESTYLE',
      url: 'blog/categorie/lifestyle',
      icon: 'accessibility',
    },
    {
      title: 'TIPS&TRICKS',
      url: 'blog/categorie/tips-and-tricks',
      icon: 'thumbs-up',
    },
  ];

  public categoriesPages = [
    {
      title: 'Fitness',
      url: '/blog/fitness',
      icon: 'fitness',
    },
    {
      title: 'NUTRIȚIE',
      url: '/blog/nutritie',
      icon: 'nutrition',
    },
    {
      title: 'LIFESTYLE',
      url: '/blog/lifestyle',
      icon: 'accessibility',
    },
    {
      title: 'MOTIVAȚIONAL',
      url: '/blog/motivational',
      icon: 'thumbs-up',
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'finger-print',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  closeMenu() {
    this.menu.close();
  }

  ngOnInit() {
    const path = window.location.pathname.split('pages/')[1];
    const categoriesPath = window.location.pathname.split('pages/blog')[1];
    if (path !== undefined) {
      this.selectedAppIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
      this.selectedCategoriesIndex = this.categoriesPages.findIndex(
        (page) => page.title.toLowerCase() === categoriesPath.toLowerCase()
      );
    }
  }
}
