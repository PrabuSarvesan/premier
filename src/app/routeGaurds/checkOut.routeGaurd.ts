import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { LoginService } from 'app/services/loginService';
import { cartService } from 'app/services/sharedService';

@Injectable()
export class CheckOutRouteGuard implements CanActivate {
  public constructor(private router: Router, private loginService: LoginService, private cartService: cartService) { }

  public canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer: Observer<boolean>) => {
      if (this.loginService.isLogin) {
        if (this.cartService.getProduct().length > 0) {
          observer.next(true);
        } else {
          observer.next(false);
          this.router.navigate(['/cart']);
        }
      } else {
        observer.next(false);
        this.router.navigate(['/login']);
      }
    });
  }
}
