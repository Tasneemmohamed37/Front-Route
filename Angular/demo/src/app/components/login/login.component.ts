import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  isUserLogged:boolean = false;

  constructor(private authService:UserAuthService, private router:Router) {

  }

  ngOnInit(): void {
    this.authService.getLoggedStatus().subscribe(status =>
      this.isUserLogged = status
    );
  }


  login(){
    this.authService.login('userName','password');
    this.isUserLogged = this.authService.isUserLogged;
    this.router.navigate(['/home']);
  }

  logout(){
    this.authService.logOut();
    this.isUserLogged = this.authService.isUserLogged;
  }
}
