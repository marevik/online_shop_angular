import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  @ViewChild('signUpForm') sgnForm: NgForm;

  onSubmit() {
    console.log(this.sgnForm.value);
    this.userService.login(this.sgnForm.value.email, this.sgnForm.value.password);
  }

}