import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poste } from 'src/app/Poste';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class PosteSService {

  constructor(private http : HttpClient) { }

  Url ="http://localhost:8080/Poste" ;



  public  GetPoste(username :String,password :String): Observable<Poste[]> {
    
    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});

   return this.http.get<Poste[]>(`${this.Url}/getAllPostes`,{headers});
}
 public AddPoste(poste:Poste,username :String,password :String): Observable<Poste>{
  
    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
      
  return this.http.post<Poste>(`${this.Url}/addPoste`,poste,{headers})

 }
public UpdatePoste(poste :Poste,username :String,password :String):Observable<Poste>{
 
    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
  return this.http.put<Poste>(`${this.Url}/UpdatePoste`,poste,{headers})
}

public DeletePoste(id:number,username :String,password :String):Observable<any>{
  
    const headers =new HttpHeaders( {AUthorization : 'Basic '+ btoa(username+":"+password)});
  return this.http.delete<number>(`${this.Url}/DeletePoste?id=${id}`,{headers}) 
}


}
