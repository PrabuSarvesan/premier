import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { homeComponent } from './home/home.component';
import { footerComponent } from './footer/footer.component';
import { postComponent } from './post/post.component';
import { errorPage } from './errorPage/errorPage.component';
import { LoginComponent } from './login/login.component';
import { CheckOutComponent } from './checkOut/checkOut.component';
import {cartService} from './services/sharedService';
import {LoginService} from './services/loginService';
import {CheckOutRouteGuard} from './routeGaurds/checkOut.routeGaurd';
import { routing } from './app.routes';
import {ShoppingCartComponent} from './shoppingCart/shoppingCart.component';
import { RoutingState } from 'app/services/routingState';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    homeComponent,
    footerComponent,
    postComponent,
    LoginComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    errorPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [cartService, CheckOutRouteGuard, LoginService, RoutingState],
  bootstrap: [AppComponent]
})
export class AppModule { }
