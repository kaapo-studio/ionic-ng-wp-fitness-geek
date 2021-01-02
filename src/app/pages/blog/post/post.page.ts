import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataService } from '../../../shared/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit, OnDestroy {
  loading = true;
  post: any;
  dateFormat = environment.dateFormat;
  private queryPostsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
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
      .getAllPostsWithContent()
      .subscribe(({ data, loading }) => {
        this.presentLoading();

        const posts = data.posts.edges;

        const path = this.route.snapshot.params.slug;

        const postFiltred = posts.filter(
          (post: { node: { slug: any } }) => post.node.slug === path
        );

        postFiltred.map((post: any) => (this.post = post));

        console.log('this.post', this.post);

        this.loading = loading;
      });
  }

  ngOnDestroy() {
    this.queryPostsSubscription.unsubscribe();
  }
}
