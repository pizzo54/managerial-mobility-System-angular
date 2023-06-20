import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Candidature } from 'src/app/Candidature';
import { Nomination } from 'src/app/Nomination';
import { Poste } from 'src/app/Poste';
import { User } from 'src/app/User';
import { LoginSService } from 'src/app/login-s.service';
import { NominationSService } from 'src/app/nomination-s.service';

@Component({
  selector: 'app-nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.css']
})
export class NominationsComponent implements OnInit {
  u !: Nomination[] ;
  us ?: Nomination ;
  id !: number ;
  C ?: Nomination ;
  P ?: Poste [];
  Users ?: User [] ;
  myuser?: User ;
  cand ?: Candidature[] ;
  username : String = '';
  password : String = '';
  public SearchUsers(key : String){
    const results :Nomination[] = [] ;
    for(const pp of this.u){
  
      if(pp.resultat?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1 
     
      || pp.utilisateur?.nomU?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
      || pp.utilisateur?.prenomU?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
     ){
        results.push(pp);
  
      }
      
    }
      this.u = results;
      if(results.length == 0 || !key ){
        this.getNomination()
      }
   }
  async ngOnInit(): Promise<void> {
    this.myuser = await this.log.getSharedValue() as User;
    this.username = await this.log.getUsername() as String
    this.password = await this.log.getpassword() as String
    this.getUsers() ;
 
    this.getCandidatures()
    this.getNomination();
    this.getPostes();
  }
   constructor(public S : NominationSService,private log : LoginSService){
 
   }
 
  public getNomination(){
    this.S.GetNomination(this.username,this.password).subscribe(
     (N : Nomination[]) => {this.u = N ; console.log("im here")},
     (error : HttpErrorResponse) => {console.log(error)}
    )
  }
 
  public AddNomination(addForm :NgForm){
    this.C = {
    
 
   
    
     resultat: addForm.value.resultat,
    
     utilisateur: {
       id: addForm.value.utilisateur
     },
   
     candidature : {
      id: addForm.value.candidature
    }
   };
  
   document.getElementById("two")?.click() ;
   console.log(this.C);
  
   this.S.AddNomination(this.C,this.username,this.password).subscribe(
    (n : Nomination) => {
     this.getNomination() ;
    },
    (error : HttpErrorResponse) => {
    console.log(error) ;
    }
   )
     
 }

 public FetchUser( u : Nomination){
   this.us = u ;
   this.id = u.id as number ;
 }
 
 
 public UpdateNomination(updateForm :NgForm){
  this.C = {
    id : updateForm.value.id ,
   
    
    resultat: updateForm.value.resultat,
   
    utilisateur: {
      id: updateForm.value.utilisateur
    },
 
    candidature : {
     id: updateForm.value.candidature
   }
  };
  console.log(this.C);
 
 
   document.getElementById("close")?.click();
    this.S.UpdateNomination(this.C,this.username,this.password).subscribe(
     (u:Nomination) => (this.getNomination()
     ),
     (error : HttpErrorResponse) => (console.log(error))
    )
 
 }
 public DeleteNomination(i :number){
 console.log(i)
    
    this.S.DeleteNomination(i,this.username,this.password).subscribe(
     
     (u:void) => (this.getNomination()
     ),
     (error : HttpErrorResponse) => (console.log(error))
    )
 
 }
 public getUsers(){
  this.S.getUsers(this.username,this.password).subscribe(
     
    (u:User[]) => ( this.Users = u 
    ),
    (error : HttpErrorResponse) => (console.log(error))
   )


 }
 public getCandidatures(){
  this.S.getCandidatures(this.username,this.password).subscribe(
     
    (u:Candidature[]) => ( this.cand= u 
    ),
    (error : HttpErrorResponse) => (console.log(error))
   )

 }
 public getPostes(){
  this.S.getPostes(this.username,this.password).subscribe(
     
    (u:Poste[]) => ( this.P = u 
    ),
    (error : HttpErrorResponse) => (console.log(error))
   )

 }
}
