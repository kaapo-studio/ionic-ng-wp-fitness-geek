import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { DataService } from './../../shared/data.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: any[] = [];
  rates: any[] = [];
  loading = true;
  error: any;
  dateFormat = environment.dateFormat;
  constructor(public dataService: DataService, private apollo: Apollo) {}

  ngOnInit() {
    console.log('>> ngOnInit');
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        console.log('>> Apollo >> result', result);
        this.rates = result?.data?.rates;
        this.loading = result.loading;
        this.error = result.error;
      });
    console.log('>> Apollo', this.rates);
  }
}
