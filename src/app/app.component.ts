import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { LoginSService } from './login-s.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GMobilite';
 public app = false ;
  static app: boolean;
  user ?: User |null ;
  

constructor(private l : LoginSService,private router: Router){

}
  async ngOnInit(): Promise<void> {

    this.user = await this.l.getSharedValue();
  }

  logout(){
        
 
    this.l.clearUser();

    
   
  }
 
}
