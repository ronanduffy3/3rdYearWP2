import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UserServiceService} from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserServiceService) { }
  title = 'Plant Item App';  

  onLogOutClicked(){
    this.userService.logUserOut();
    window.localStorage.removeItem("token");
    window.location.reload();
  }

}
