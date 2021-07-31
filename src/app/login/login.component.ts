import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from './models/login-response';
import { UserLogin } from './models/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:UserLogin = new UserLogin();
  alerta:boolean = false
  loading:boolean = false
  loginResponse:LoginResponse = new LoginResponse()
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  acceso(){

  }

}
