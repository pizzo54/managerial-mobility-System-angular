import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Poste } from 'src/app/Poste';
import { User } from 'src/app/User';
import { LoginSService } from 'src/app/login-s.service';
import { PosteSService } from 'src/app/poste-s.service';

@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.css']
})
export class PostesComponent implements OnInit {
  p !: Poste[];
  PS ?: Poste ;
  id !: number ;
  myuser ?: User  ;
  username : String = '';
  password : String = '';
   

  public FetchPoste( p : Poste){
   
    this.PS = p ;
    this.id = p.id as number ;
  }
  constructor(public P : PosteSService , public l : LoginSService){

  }
  async ngOnInit(): Promise<void> {
    this.myuser = await this.l.getSharedValue() as User;
    this.username = await this.l.getUsername() as String
   this.password = await this.l.getpassword() as String
    this.GetPoste()

  }
  public  GetPoste(){

    this.P.GetPoste(this.username,this.password).subscribe(
      (pp : Poste[]) => (this.p = pp) ,
      (error : HttpErrorResponse) => (console.log(error)) 

    )
 }
  public AddPoste(addForm :NgForm){
       
    document.getElementById("close")?.click() ;
 
    this.P.AddPoste(addForm.value,this.username,this.password).subscribe(
     (pp: Poste) => {
      this.GetPoste() ;
       },
     (error : HttpErrorResponse) => {console.log(error)}
    )
 
  }
 public UpdatePoste(updateForm :NgForm){
   
  document.getElementById("closeUpdate")?.click();
  this.P.UpdatePoste(updateForm.value,this.username,this.password).subscribe(
   (pp:Poste) => (this.GetPoste()
   ),
   (error : HttpErrorResponse) => (console.log(error))
  )
 }

 public SearchUsers(key : String){
  const results :Poste[] = [] ;
  for(const pp of this.p){

    if(pp.logo?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1 
    || pp.intitule?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
    || pp.description?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1){
      results.push(pp);

    }
    
  }
    this.p = results;
    if(results.length == 0 || !key ){
      this.GetPoste()
    }
 }
 
 public DeletePoste(i :number){
  this.P.DeletePoste(i,this.username,this.password ).subscribe(
    
    (u:void) => (this.GetPoste()
    ),
    (error : HttpErrorResponse) => (console.log(error))
   )

 }
 




}
