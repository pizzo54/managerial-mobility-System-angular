import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/User';
import { LoginSService } from 'src/app/login-s.service';
import { UserSService } from 'src/app/user-s.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 u !: User[] ;
 us ?: User ;
 id !: number ;
 user ?:  User;
 username : String = '';
 password : String = '';
 public SearchUsers(key : String){
  const results :User[] = [] ;
  for(const pp of this.u){

    if(pp.nomU?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1 
    || pp.prenomU?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
    || pp.age?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
    || pp.cin?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
    || pp.login?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
    || pp.type?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
    || pp.fonction?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
    || pp.posteActuelle?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
    || pp.localiteActuelle?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
    || pp.situationFamilial?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
    
   ){
      results.push(pp);

    }
    
  }
    this.u = results;
    if(results.length == 0 || !key ){
      this.getUsers()
    }
 }
 async ngOnInit(): Promise<void> {
 
   this.user = await this.log.getSharedValue() as User
   this.username = await this.log.getUsername() as String
   this.password = await this.log.getpassword() as String
   console.log("///////////////////////////////////////////////////")
 console.log(this.user.type)
 console.log(this.username)
  
 console.log(this.password)
 console.log("///////////////////////////////////////////////////")
  
   this.getUsers() ;
 }
  constructor(public S : UserSService ,private log : LoginSService){
  
  }

 public getUsers(){
   this.S.GetUsers(this.username,this.password).subscribe(
    (user : User[]) => {this.u = user ; console.log("im here")},
    (error : HttpErrorResponse) => {console.log(error)}
   )
  
   console.log("heereeee")
 }

 public AddUser(addForm :NgForm){
  document.getElementById("close")?.click() ;
 
  this.S.AddUser(addForm.value,this.username,this.password).subscribe(
   (user : User) => {
    this.getUsers() ;
     },
   (error : HttpErrorResponse) => {console.log(error)}
  )
}
public FetchUser( u : User){
  this.us = u ;
  this.id = u.id as number ;
}


public UpdateUser(updateForm :NgForm){

  document.getElementById("closeUpdate")?.click();
   this.S.UpdateUser(updateForm.value,this.username,this.password).subscribe(
    (u:User) => (this.getUsers()
    ),
    (error : HttpErrorResponse) => (console.log(error))
   )

}
public DeleteUser(i :number){
console.log(i)
   
   this.S.DeleteUser(i,this.username,this.password).subscribe(
    
    (u:void) => (this.getUsers()
    ),
    (error : HttpErrorResponse) => (console.log(error))
   )

}

}
