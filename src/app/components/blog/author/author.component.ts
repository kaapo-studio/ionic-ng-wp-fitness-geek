import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  @Input() avatarUrl: string;
  @Input() authorFirstName: string;
  @Input() authorLastName: string;
  @Input() postDate: Date;

  dateFormat = environment.dateFormat;

  constructor() {}

  ngOnInit() {}
}
