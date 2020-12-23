import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { DataService } from 'src/app/shared/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  /** Gives us access to the InfiniteScroll component that we’ll  be using in the page view. */
  @ViewChild(IonInfiniteScroll) infitineScroll: IonInfiniteScroll;

  items: any[];
  dateFormat = environment.dateFormat;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPosts().subscribe((data: any[]) => {
      this.items = data;
    });
  }

  /** A new getMorePosts() function pretty much just proxies to the function of the same name that’s in the DataService.
   *  I uses this.infiniteScroll.complete() to remove the loading  spinner when it’s done doing its thing. */
  getMorePosts(evt) {
    this.dataService.getMorePosts().subscribe((data: any[]) => {
      this.items = data;
      this.infitineScroll.complete();
    });
  }

  /** The new infiniteScrollDisabled() function exposes a true/false property that will be bound to
   * the ion-infinite-scroll component in the view.
   *  This will be used  to ensure that the infinite scroll component gets disabled when there are no more post pages available to load. */
  infiniteScrollDisabled() {
    if (this.dataService.hasMorePost()) {
      return false;
    } else {
      return true;
    }
  }
}
