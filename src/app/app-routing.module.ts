import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./modules/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'item-details',
    loadChildren: () => import('./modules/item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  },
  {
    path: 'my-cart',
    loadChildren: () => import('./modules/my-cart/my-cart.module').then( m => m.MyCartPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./modules/my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./modules/favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./modules/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./modules/confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'categories-list',
    loadChildren: () => import('./modules/categories-list/categories-list.module').then( m => m.CategoriesListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
