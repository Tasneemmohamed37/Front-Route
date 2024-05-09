import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  isUserLogged:boolean = false;

  constructor(private authService:UserAuthService) {

  }

  ngOnInit(): void {
    this.authService.getLoggedStatus().subscribe(status =>
      this.isUserLogged = status
    );
  }


  login(){
    this.authService.login('userName','password');
    this.isUserLogged = this.authService.isUserLogged;
  }

  logout(){
    this.authService.logOut();
    this.isUserLogged = this.authService.isUserLogged;
  }
}
