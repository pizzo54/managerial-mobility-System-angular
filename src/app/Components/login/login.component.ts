import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/User';
import { AppComponent } from 'src/app/app.component';
import { LoginSService } from 'src/app/login-s.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 constructor(private service : LoginSService,private router: Router){}

  user :User = {} ;
  username ?: String ;
  password ?: String ;


  public login(form : NgForm) {
   
   
console.log(form.value.login)
  
console.log(form.value.password)
    
  
    let resp = this.service.login(form.value.login,form.value.password);
    
  
       
  

  }
}
