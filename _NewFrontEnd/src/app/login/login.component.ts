import { Component, OnInit } from '@angular/core';
import {EventEmitter} from 'events';
import {FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import {routingComponents} from '../app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) { }

  loginForm: FormGroup;


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  onSubmit(loginForm) {
    this.userService.login(loginForm.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        console.log('Login Worked');
      },
      err => {
        console.log(err);
      }
    );
  }

}
