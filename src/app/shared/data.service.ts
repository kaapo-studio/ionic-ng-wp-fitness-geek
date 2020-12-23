import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { of } from 'rxjs';
import 'rxjs/add/operator/map';
import { AuthenticationService } from './authentication.service';

const ENDPOINT_URL = environment.endpointURL;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  items: any[] = [];

  /** We added a class variable called page to track the current or last page (set of posts) that we’ve loaded. */
  page = 1;

  /** We added a class variable called totalPages to hold the total number of pages of posts that are available.
  This is needed so that we can disable the infinite scroll component when we’ve reached the last of the available pages.
  If we don’t disable the component, it will try to fetch a page number that isn’t available and thus result in an error. */
  totalPages = 1;

  constructor(
    private http: HttpClient,
    public authenticationService: AuthenticationService
  ) {}

  /**
   *  Gets a page of pots or all posts formerly fetched
   */
  getPosts(): any {
    console.log('>> DataService.getPosts');
    /**
     * In the getPosts() function, we modified the HttpClient’s get call. We added {observe: 'response'}
     * to specify that we want the whole HttpResponse back, rather than just the body.
     * This is necessary because we need to inspect the response to find the X-WP-TotalPages header,
     * which WordPress gives to tell us how many  total pages are available.
     */
    if (this.items.length > 0) {
      /** The of operator accepts a number of items as parameters, and returns an Observable that emits each of
      // tslint:disable-next-line: jsdoc-format
      these parameters, in order, as its emitted sequence. In this case, we will only be returning this.itms to any subscriber. */
      return of(this.items);
    } else {
      /** http.get() creates an observable. */
      /** map() creates and returns its own new observable from the observable that http.get() created,
       which we can then subscribe to. Therefore, we can subscribe to the result of this method.
       The Map operator applies a function of your choosing to each item emitted by the source Observable,
       and returns an Observable that emits the returns of these function applicaitons. */
      const user = this.authenticationService.getUser();

      if (user) {
        return this.http
          .get(
            ENDPOINT_URL + 'wp/v2/posts?_embed&status=any&token=' + user.token,
            {
              observe: 'response',
              headers: { Authorization: 'Bearer ' + user.token },
            }
          )
          .map(this.processPostData, this);
        console.log('is user');
      } else {
        return this.http
          .get(ENDPOINT_URL + 'wp/v2/posts?_embed', { observe: 'response' })
          .map(this.processPostData, this);
      }
    }
  }

  /**
   *  We added a getMorePosts() function that increments  the current page variable, gets the next page of posts,
   * and then pushes them onto the array of posts that we already have.
   */
  getMorePosts(): any {
    this.page++;
    return this.http
      .get(ENDPOINT_URL + 'wp/v2/posts?_embed&page=' + this.page, {
        observe: 'response',
      })
      .map(this.processPostData, this);
  }

  // A place for post-processing, before making the fetched data available to view.
  processPostData(resp: HttpResponse<any[]>) {
    // unary (+) operator casts the string to a number
    this.totalPages = +resp.headers.get('X-WP-TotalPages');
    // Do post-processing code here (if useful)
    resp.body.forEach((item: any) => {
      this.items.push(item);
    });
    console.log('processPostData', this.items);
    return this.items;
  }

  // Get post by slug
  getPostBySlug(slug): any {
    console.log('getPostBySlug', this.items);
    return this.items.find((item) => item.slug === slug);
  }

  // hasMorePosts() convenience function to return true or false depending on whether more pages are available to be loaded.
  hasMorePost() {
    return this.page < this.totalPages;
  }
}
