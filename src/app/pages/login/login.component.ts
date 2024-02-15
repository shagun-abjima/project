import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserLogin } from '../../model/userlogin.model';
import { dataService } from '../../service/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userList:
  UserLogin[]=[];
  userForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]], 
    password: ['',Validators.required]
    
  });

  constructor(private fb: FormBuilder,private userservice:dataService) { };

  checkUser() {
    console.log(this.userForm.value);
   
  }
  ngOnInit(): void {
    
  }
}