import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/views/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fullName: string = '';
  userAbbreviation = '';
  fixedAside:boolean = true;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.initializeUser();
  }

  initializeUser(){
    this.fullName = this.authService.getUsername();
    if (this.fullName) {
      const fullNameToArray = this.fullName.split(' ').map((item: string) => {
        return item.substring(0, 1).toUpperCase();
      });
      this.userAbbreviation = fullNameToArray.join('');
    }
  }


  logout() {
    this.authService.logout();
  }
}
