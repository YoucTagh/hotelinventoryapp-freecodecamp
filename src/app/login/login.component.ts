import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string = ''
  password:string = ''

  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.loginService.login(this.email, this.password)){
      this.router.navigateByUrl('/rooms')
    }
  }

}
