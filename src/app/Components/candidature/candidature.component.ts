  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  import { Component } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { Observable } from 'rxjs';
  import { Candidature } from 'src/app/Candidature';
  import { User } from 'src/app/User';
  import { CandidatureSService } from 'src/app/candidature-s.service';
  import { FormBuilder, FormGroup } from '@angular/forms';
  import { Poste } from 'src/app/Poste';
  import { LoginSService } from 'src/app/login-s.service';

  @Component({
    selector: 'app-candidature',
    templateUrl: './candidature.component.html',
    styleUrls: ['./candidature.component.css']
  })
  export class CandidatureComponent {
    u !: Candidature[] ;
  us ?: Candidature ;
  id !: number ;
  C ?: Candidature ;
  etat : String = "En attente";
  postes ?: Poste [];
  myuser ?: User ;
  username : String = '';
  password : String = '';
  
  async ngOnInit(): Promise<void> {
    this.myuser = await this.l.getSharedValue() as User
    this.username = await this.l.getUsername() as String
    this.password = await this.l.getpassword() as String
      
    this.GetCandidature() ;
    this.getpostes()
  }
    constructor(public S : CandidatureSService,public l : LoginSService){
        
    }

  public GetCandidature(){
    if (this.myuser) {
    this.S.GetCandidature(this.myuser,this.username,this.password).subscribe(
      (CC : Candidature[]) => {this.u = CC ; console.log("im hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")},
      
      (error : HttpErrorResponse) => {console.log(error)}
    )}
  }


  public FetchUser( u : Candidature){
    this.us = u ;
    this.id = u.id as number ;
  }



  public DeleteCandidature(i :number){
  console.log(i)
    
    this.S.DeleteCandidature(i,this.username,this.password).subscribe(
      
      (u:void) => (this.GetCandidature()
      ),
      (error : HttpErrorResponse) => (console.log(error))
    )

  }

  public getpostes(){
    this.S.getAllPostNames(this.username,this.password).subscribe(
      (ss :Poste[]) =>{
      this.postes = ss ;
      
      }
    )
  }
  public SearchUsers(key : String){
    const results :Candidature[] = [] ;
    for(const pp of this.u){

      if(pp.emailC?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1 
      || pp.nomC?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
      || pp.posteA?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
      || pp.etat?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1
      || pp.prenomC?.toLowerCase().indexOf(key.toLocaleLowerCase())!== -1){
        results.push(pp);

      }
      
    }
      this.u = results;
      if(results.length == 0 || !key ){
        this.GetCandidature()
      }
  }
  public AddCandidature(addForm :NgForm){
    this.C = {
      numero: addForm.value.numero,
      nomC: addForm.value.nomC,
      prenomC: addForm.value.prenomC,
      ageC: addForm.value.ageC,
      telephoneC: addForm.value.telephoneC,
      emailC: addForm.value.emailC,
      posteA: addForm.value.posteA,
      user: addForm.value.utilisateur,
      raisonM: addForm.value.raisonM,
      etat: addForm.value.etat,
      
      poste : {
        id: addForm.value.poste
      }
    };
    console.log("//////////////////////////////////////////////")
    console.log("//////////////////////////////////////////////")
    console.log("//////////////////////////////////////////////")
    console.log(this.C)
    console.log("//////////////////////////////////////////////")
    console.log("//////////////////////////////////////////////")
    console.log("//////////////////////////////////////////////")

    document.getElementById("one")?.click()
  console.log(this.C)
    this.S.AddCandidature(this.C,this.username,this.password).subscribe(
    (C : Candidature) => {
      this.GetCandidature() ;
      },
    (error : HttpErrorResponse) => {console.log(error)}
    )
  }
  public UpdateC(addForm :NgForm){
    this.C = {
      id :addForm.value.id ,
    numero: addForm.value.numero,
    nomC: addForm.value.nomC,
    prenomC: addForm.value.prenomC,
    ageC: addForm.value.ageC,
    telephoneC: addForm.value.telephoneC,
    emailC: addForm.value.emailC,
    posteA: addForm.value.posteA,
    
    raisonM: addForm.value.raisonM,
    etat: addForm.value.etat,
    user: addForm.value.utilisateur,
    poste : {
      id: addForm.value.poste
    }
  };
  

  document.getElementById("close")?.click() ;
  console.log(this.C)
  this.S.UpdateC(this.C,this.username,this.password).subscribe(
    (C : Candidature) => {
    this.GetCandidature() ;
      },
    (error : HttpErrorResponse) => {console.log(error)}
  )
  }
  }
