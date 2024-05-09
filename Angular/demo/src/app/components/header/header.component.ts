import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isUserLogged:boolean = false;
  
  constructor(private authService:UserAuthService){

  }

  ngOnInit(): void {
    this.authService.getLoggedStatus().subscribe(status =>
      this.isUserLogged = status
    );
        // this.isUserLogged = this.authService.isUserLogged;
  }

}
