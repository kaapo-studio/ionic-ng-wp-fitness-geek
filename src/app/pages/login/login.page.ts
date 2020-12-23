import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from './../../shared/authentication.service';
import { DataService } from './../../shared/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | undefined;

  constructor(
    public formBuilder: FormBuilder,
    public loadingController: LoadingController,
    public authenticationService: AuthenticationService,
    public dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.required),
    });
  }

  async login(value: { username: any; password: any }) {
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'Te rog asteapta...',
    });
    loading.present();
    this.authenticationService
      .doLogin(value.username, value.password)
      .subscribe(
        (res) => {
          this.authenticationService.setUser(res);
          // Reset the post items so that next time, they are completely
          // reloaded for the newly authenticated user...
          this.dataService.items = [];
          loading.dismiss();
          this.router.navigateByUrl('/blog');
          this.dataService.getPosts();
        },
        (err) => {
          this.errorMessage = 'Credentiale invalide.';
          loading.dismiss();
          console.log(err);
        }
      );
  }
}
