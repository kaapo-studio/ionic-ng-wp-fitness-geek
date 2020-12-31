import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tips-and-tricks',
  templateUrl: './tips-and-tricks.page.html',
  styleUrls: ['./tips-and-tricks.page.scss'],
})
export class TipsAndTricksPage implements OnInit, OnDestroy {
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
      .getAllTipsAndTricksPostsWithExcerpt()
      .subscribe(({ data, loading }) => {
        this.presentLoading();
        this.posts = data.category.posts.edges;
        this.loading = loading;
      });
  }
  ngOnDestroy() {
    this.queryPostsSubscription.unsubscribe();
  }
}
