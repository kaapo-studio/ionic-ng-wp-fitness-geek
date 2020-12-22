import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment.prod";
import { of } from "rxjs";
import "rxjs/add/operator/map";

const ENDPOINT_URL = environment.endpointURL;

@Injectable({
  providedIn: "root",
})
export class DataService {
  items: any[];
  constructor(private http: HttpClient) {}
  /**
   *  Gets a page of pots or all posts formerly fetched
   */
  getPosts(): any {
    if (this.items) {
      /** The of operator accepts a number of items as parameters, and returns an Observable that emits each of
      these parameters, in order, as its emitted sequence. In this case, we will only be returning this.itms to any subscriber. */
      return of(this.items);
    } else {
      /** http.get() creates an observable. */
      /** map() creates and returns its own new observable from the observable that http.get() created,
       which we can then subscribe to. Therefore, we can subscribe to the result of this method.
       The Map operator applies a function of your choosing to each item emitted by the source Observable,
       and returns an Observable that emits the returns of these function applicaitons. */
      return this.http
        .get(ENDPOINT_URL + "wp/v2/posts?_embed")
        .map(this.processPostData, this);
    }
  }

  // A place for post-processing, before making the fetched data available to view.
  processPostData(data: any[]) {
    // Do post-processing code here (if useful)
    this.items = data;
    return this.items;
  }
}
