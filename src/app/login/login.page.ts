import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email!: string;
  name!: string;
  surname!: string;
  studentNumber!: number;
  password!: string;
  constructor() { }

  ngOnInit() {
  }
login(){
  
}
}
