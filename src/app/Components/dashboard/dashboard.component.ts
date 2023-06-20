import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginSService } from 'src/app/login-s.service';
import { User } from 'src/app/User';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {

user!: number ;
candidature!: number ;
nomination!: number ;
poste!: number ;
u ?:  User;
username : String = '';
password : String = '';
users!: User[] ;

constructor(public d : DashboardService,private log : LoginSService){
  
}

  async ngOnInit(): Promise<void> {
    this.u = await this.log.getSharedValue() as User
    this.username = await this.log.getUsername() as String
    this.password = await this.log.getpassword() as String
    this.getnombrecandidature();
    this.getnombreposte();
    this.getnombrenomination();
    this.getnombreuse();   
    this.getall();
  }

public getnombreuse () {

this.d.getnombreusee(this.username,this.password).subscribe(
  
(s : number) => {this.user = s ;},
(error :HttpErrorResponse) => {console.log(error)}

)
}
public getnombreposte () {
  this.d.getnombreposte(this.username,this.password).subscribe(
    (s : number) => {this.poste = s ;},
    (error :HttpErrorResponse) => {console.log(error)}
    
    )
}
public getnombrecandidature () {
  this.d.getnombrecandidature(this.username,this.password).subscribe(
    (s : number) => {this.candidature = s ;},
    (error :HttpErrorResponse) => {console.log(error)}
    
    )
}
public getnombrenomination () {
  this.d.getnombrenomination(this.username,this.password).subscribe(
    (s : number) => {this.nomination = s ;},
    (error :HttpErrorResponse) => {console.log(error)}
    
    )
}
public getall () {
  this.d.getAllUser(this.username,this.password).subscribe(
    (s : User []) => {this.users = s ;},
    (error :HttpErrorResponse) => {console.log(error)}
    
    )
    console.log(this.users)
}



}
