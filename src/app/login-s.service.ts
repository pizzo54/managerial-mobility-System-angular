import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { User } from './User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginSService {

  private readonly USER_KEY = 'user';
  private readonly USER_KEY1 = 'user1';
  private readonly username = 'username';
  private readonly password = 'password';
  
  URL="http://localhost:8080";

  constructor(private http : HttpClient,private router: Router) { }
  public login(username: string, password: string): Observable<User> {
    
    
   
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ":" + password) });
    this.http.get<User>(`${this.URL}/Login?l=${username}`, { headers }).subscribe(
      ( a: User) => {
        
    sessionStorage.setItem(this.username,JSON.stringify(username))
    sessionStorage.setItem(this.password,JSON.stringify(password))
        sessionStorage.setItem(this.USER_KEY,JSON.stringify(a))
        this.router.navigateByUrl('').then(() => {
          window.location.reload();
        });
    
      },
      (error :HttpErrorResponse) => {
       document.getElementById("ok")?.click();
      }
    );
    
    return this.http.get<User>(`${this.URL}/Login?id=${username}`, { headers });
    
  }
  gettheuser(): Promise<User | null> {
    return new Promise<User | null>((resolve) => {
      const userString = sessionStorage.getItem(this.USER_KEY1);
      const user = userString ? JSON.parse(userString) as User : null;
      resolve(user);
    });
  }

  getSharedValue(): Promise<User | null> {
    return new Promise<User | null>((resolve) => {
      const userString = sessionStorage.getItem(this.USER_KEY);
      const user = userString ? JSON.parse(userString) as User : null;
      resolve(user);
    });
  }
  getUsername(): Promise<String | null> {
    return new Promise<String | null>((resolve) => {
      const username = sessionStorage.getItem(this.username);
      const user = username ? JSON.parse(username) as String : null;
      resolve(user);
    });
  }
  getpassword(): Promise<String | null> {
    return new Promise<String | null>((resolve) => {
      const password = sessionStorage.getItem(this.password);
      const user = password ? JSON.parse(password) as String : null;
      resolve(user);
    });
  }

  public clearUser() {
    console.log(this.USER_KEY)
    sessionStorage.removeItem(this.USER_KEY);
    sessionStorage.removeItem(this.username);
    sessionStorage.removeItem(this.password);
  
    this.router.navigateByUrl('').then(() => {
      window.location.reload();
    });;
    
  }
}
