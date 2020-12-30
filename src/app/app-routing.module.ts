import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/main/main.module').then((m) => m.MainPageModule),
  },
  {
    path: 'blog/:slug',
    loadChildren: () =>
      import('./pages/blog/post/post.module').then((m) => m.PostPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'blog/categorie/fitness',
    loadChildren: () =>
      import('./pages/blog/fitness/fitness.module').then(
        (m) => m.FitnessPageModule
      ),
  },
  {
    path: 'blog/categorie/nutritie',
    loadChildren: () =>
      import('./pages/blog/nutritie/nutritie.module').then(
        (m) => m.NutritiePageModule
      ),
  },
  {
    path: 'blog/categorie/lifestyle',
    loadChildren: () =>
      import('./pages/blog/lifestyle/lifestyle.module').then(
        (m) => m.LifestylePageModule
      ),
  },
  {
    path: 'blog/categorie/tips-and-tricks',
    loadChildren: () =>
      import('./pages/blog/tips-and-tricks/tips-and-tricks.module').then(
        (m) => m.TipsAndTricksPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
