import { Poste } from "./Poste";
import { User } from "./User";

export interface Candidature {

       id  ?: number
      numero ?: number ;
      nomC ?: String ;
      prenomC ?:String;
       ageC ?:number ;
      telephoneC ?: String;
      emailC ?: String;
      posteA ?: String ;

       raisonM ?: String;
      etat ?: String ;
      user ?: String;
      poste ?: Poste ;
}