import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from './User';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserSService {

  Url ="http://localhost:8080/User" ;

  constructor(private http : HttpClient) {}

  public  GetUsers(username :String,password :String): Observable<User[]> {

    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
   return this.http.get<User[]>(`${this.Url}/GetAllUsers`,{headers });
}
 public AddUser(user:User,username :String,password :String): Observable<User>{
 
  const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
  return this.http.post<User>(`${this.Url}/addUser`,user,{headers})

 }
public UpdateUser(user :User,username :String,password :String):Observable<User>{
 
  const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
  return this.http.put<User>(`${this.Url}/UpdateUser`,user,{headers })
}

public DeleteUser(id:number,username :String,password :String):Observable<any>{

  const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
  return this.http.delete<number>(`${this.Url}/deleteUser?id=${id}`,{headers }) 
}

}
