import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UserServiceService} from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn: boolean;
  token: string;

  constructor(private userService: UserServiceService) { }
  title = 'Plant Item App';

  ngOnInit() : void {
    this.checkLoggedIn();
    if(this.isLoggedIn === false){
      const logoutLink = document.getElementById('logoutLink');
      logoutLink.innerHTML.replace("Log Out", " ");
    }
  }

  onLogOutClicked() {
    this.userService.logUserOut();
    window.localStorage.removeItem('token');
    window.location.reload();
  }

  checkLoggedIn() {
    this.token = localStorage.getItem('token');

    if (!this.token) {
      console.log('Not logged in');
      this.isLoggedIn = false;
    } else{
      console.log(`Logged in with ${this.token}`);
      this.isLoggedIn = true;
    }
  }
}