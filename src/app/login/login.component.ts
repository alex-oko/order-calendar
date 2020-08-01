import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  objLogin;
  preloaderLogin;
  constructor() { }

  ngOnInit(): void {
    this.objLogin = {
      email: '',
      password: ''
    };
  }

  login(): void {
    console.log('login');
  }

}
