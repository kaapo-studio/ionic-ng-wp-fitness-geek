import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';
import { environment } from 'src/environments/environment';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit, OnDestroy {
  /** Gives us access to the InfiniteScroll component that we’ll  be using in the page view. */
  /** Gives us access to the InfiniteScroll component that we’ll  be using in the page view. */
  @ViewChild(IonInfiniteScroll)
  infitineScroll!: IonInfiniteScroll;

  dateFormat = environment.dateFormat;
  posts: any[] = [];
  loading = true;

  private queryPostsSubscription: Subscription;

  constructor(
    public dataService: DataService,
    public loadingController: LoadingController
  ) {}

  async presentLoading() {
    const loadingC = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000,
    });
    await loadingC.present();
    if (!this.loading) {
      await loadingC.dismiss();
      const { role, data } = await loadingC.onDidDismiss();
      console.log('Loading dismissed!');
    }
  }

  ngOnInit() {
    this.queryPostsSubscription = this.dataService
      .getAllPostsWithExcerpt()
      .subscribe(({ data, loading }) => {
        this.presentLoading();
        this.posts = data.posts.edges;
        this.loading = loading;
      });
  }

  /** A new getMorePosts() function pretty much just proxies to the function of the same name that’s in the DataService.
   *  I uses this.infiniteScroll.complete() to remove the loading  spinner when it’s done doing its thing. */
  getMorePosts(evt: any) {
    this.queryPostsSubscription = this.dataService
      .getMorePosts()
      .subscribe(({ data, loading }) => {
        this.posts = data;
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

  ngOnDestroy() {
    this.queryPostsSubscription.unsubscribe();
  }
}
