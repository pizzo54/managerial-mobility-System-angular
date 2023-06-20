import { Candidature } from "./Candidature";
import { Poste } from "./Poste";
import { User } from "./User";

export interface Nomination {
    id ?: number ;

  
     
      resultat ?: string ;

        utilisateur ?: User;
        poste ?: Poste;

      candidature ?: Candidature;
    
}