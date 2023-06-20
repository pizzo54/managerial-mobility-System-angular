import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';
import { Nomination } from './Nomination';
import { Candidature } from './Candidature';
import { Poste } from './Poste';

@Injectable({
  providedIn: 'root'
})
export class NominationSService {


  Url ="http://localhost:8080/Nomination" ;

  constructor(private http : HttpClient) {}

  public  GetNomination(username :String,password :String): Observable<Nomination[]> {
   
    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
   return this.http.get<Nomination[]>(`${this.Url}/GetAllN`,{headers});
}
 public AddNomination(N:Nomination,username :String,password :String): Observable<Nomination>{
  
  const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
      
  return this.http.post<Nomination>(`${this.Url}/AddN`,N,{headers})

 }
public UpdateNomination(N :Nomination,username :String,password :String):Observable<Nomination>{
  
  const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
  return this.http.put<Nomination>(`${this.Url}/UpdateN`,N,{headers})
}

public DeleteNomination(id:number,username :String,password :String):Observable<any>{
  
  const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
  return this.http.delete<number>(`${this.Url}/DeleteN?id=${id}`,{headers}) 
}
public getUsers(username :String,password :String): Observable<User[]>{
  
  const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
      
  return this.http.get<User[]>(`${this.Url}/GetAllU`,{headers})

 }
 public getCandidatures(username :String,password :String): Observable<Candidature[]>{
 
  const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
      
  return this.http.get<Candidature[]>(`${this.Url}/GetAllC`,{headers})

 }
 public getPostes(username :String,password :String): Observable<Poste[]>{
  
  const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
      
  return this.http.get<Poste[]>(`${this.Url}/GetAllP`,{headers})

 }
}
