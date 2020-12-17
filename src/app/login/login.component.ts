import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/loginService';
import { RoutingState } from 'app/services/routingState';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  userName = '';
  password = '';
  invalid = false;
  constructor(private router: Router, private loginService: LoginService, private routingState: RoutingState) { }
  loginClick() {
    if (this.userName.toLowerCase() === 'admin' && this.password === 'admin') {
      this.invalid = false;
      this.loginService.updateUser({userName: this.userName, password: this.password});
      this.router.navigateByUrl(this.routingState.getPreviousUrl());
    } else {
      this.password = '';
      this.invalid = true;
    }
  };
}
