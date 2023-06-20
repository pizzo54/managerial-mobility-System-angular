import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidature } from './Candidature';
import { Observable } from 'rxjs';
import { Poste } from './Poste';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class CandidatureSService {

  constructor(private http : HttpClient) { }

  Url ="http://localhost:8080/Candidature" ;

  getAllPostNames(username :String,password :String): Observable<Poste[]> {

    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
    const url = `${this.Url}/getpst`;
    return this.http.get<Poste[]>(url,{headers});
  }

  public  GetCandidature(myu : User,username :String,password :String): Observable<Candidature[]> {

    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});

   return this.http.get<Candidature[]>(`${this.Url}/GetAll?id=${myu.id}`,{headers});
}
 public AddCandidature(c:Candidature,username :String,password :String): Observable<Candidature>{

  const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
  console.log(c)
      
  return this.http.post<Candidature>(`${this.Url}/AddC`,c,{headers})

 }


public DeleteCandidature(id:number,username :String,password :String):Observable<any>{
 
  const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
  return this.http.delete<number>(`${this.Url}/DeleteC?id=${id}`,{headers}) 
}
public UpdateC(c:Candidature,username :String,password :String):Observable<Candidature>{
 
  const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
  return this.http.put<Candidature>(`${this.Url}/UpdateC`,c,{headers}) ;
}
}
