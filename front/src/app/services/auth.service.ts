import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username: string | undefined;

  constructor() { }

  public login(username: string): void {
    this.username = username;
  }

  public logout(): void {
    this.username = undefined;
  }
}
