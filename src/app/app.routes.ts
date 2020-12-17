import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { postComponent } from './post/post.component';
import { homeComponent } from './home/home.component';
import { errorPage } from './errorPage/errorPage.component';
import { LoginComponent } from './login/login.component';
import { CheckOutComponent } from './checkOut/checkOut.component';
import {ShoppingCartComponent} from './shoppingCart/shoppingCart.component';
import {CheckOutRouteGuard} from './routeGaurds/checkOut.routeGaurd';

// Route Configuration
export const routes: Routes = [
    { path: '', component: homeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: homeComponent },
    { path: 'post', component: postComponent },
    { path: 'cart', component: ShoppingCartComponent },
    {
        canActivate: [CheckOutRouteGuard],
        path: 'checkOut',
        component: CheckOutComponent
    },
    { path: '**', component: errorPage }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
