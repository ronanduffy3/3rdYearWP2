import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private uri = 'http://localhost:3000/api/users/login-user';

  constructor(private httpClient: HttpClient) { }



}
