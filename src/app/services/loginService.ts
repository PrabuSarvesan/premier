import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private UserData: object = {};
  public isLogin = false;
  updateUser(user: object) {
    this.UserData = user;
    this.isLogin = true;
  }
  clearUser() {
    this.UserData = {};
    this.isLogin = false;
  }
  getUser() { return this.UserData; };
}
