import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dataService } from '../../service/data.service';
import { signUp } from '../../model/User.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  showLogin:boolean = true;

  signupForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]], 
    password:['', Validators.required],
    username: ['', Validators.required],
    name: this.fb.group({ 
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    }),
    address: this.fb.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      zipcode: ['',Validators.required],
      geolocation: this.fb.group({
        lat:[''],
        long:['']
      }),
    }),
    phone: ['',Validators.required]

  });

 

  constructor(private fb: FormBuilder, private dataservice:dataService , private router: Router) { };

  ngOnInit(): void {
    this.dataservice.userAuthReload();
  }

  
  signUp(data: signUp) {
    this.dataservice.userSignUp(data);
  }
 
  openRegister(){
    this.showLogin = false

  }

}