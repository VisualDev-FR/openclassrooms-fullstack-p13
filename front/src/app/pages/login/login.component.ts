import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public username: string = "enduser";

  public constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public login(): void {
    this.authService.login(this.username);
    this.router.navigateByUrl("/chat")
  }
}
