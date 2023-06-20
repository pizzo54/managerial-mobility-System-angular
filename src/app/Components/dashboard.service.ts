import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../User';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  Url ="http://localhost:8080/Request" ;
  Url2 ="http://localhost:8080/User" ;
  constructor(private http : HttpClient) { }
  public getnombreusee (username :String,password :String) : Observable<number>  {
    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
    console.log('im hereeeeeeeee')
    console.log(username);
    console.log(password);

    
    return this.http.get<number>(`${this.Url}/user`,{headers});
  }
  public getnombreposte (username :String,password :String) {
    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
    console.log('im hereeeeeeeee')
    return this.http.get<number>(`${this.Url}/poste`,{headers});  
  }
  public getnombrecandidature (username :String,password :String) {
    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
    console.log('im hereeeeeeeee')
    return this.http.get<number>(`${this.Url}/candidature`,{headers});
  }
  public getnombrenomination (username :String,password :String) {
    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
    console.log('im hereeeeeeeee')
    return this.http.get<number>(`${this.Url}/nomination`,{headers});
  }
  public getAllUser (username :String,password :String) :Observable<User[]>{
    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
    console.log('im hereeeeeeeee')
    return this.http.get<User[]>(`${this.Url2}/GetAllUsers`,{headers});
  }
}
