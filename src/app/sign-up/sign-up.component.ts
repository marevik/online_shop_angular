import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {    

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  defaultSuscription: string = "Advance";
  subscriptions: string[] = ["Pro", "Advance", "Free"]
  @ViewChild('signUpForm') sgnForm: NgForm;

  onSubmit() {
    console.log(this.sgnForm.value);
    let user: User = new User(
      this.sgnForm.value.email,
       this.sgnForm.value.password,
        this.sgnForm.value.subscription);
        this.userService.addNewUser(user);
  }

}