import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { Type } from '../model/type.model';
import { EvenementService } from '../services/evenement.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
})
export class RechercheParTypeComponent implements OnInit {

evenements! : Evenement[];
types! : Type[];
idType! : number;
constructor(private evenementService : EvenementService,
  public authService: AuthService
) { }
supprimerEvenement(e:Evenement) {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
     this.evenementService.supprimerEvenement(e.idEvenement).subscribe(() => {
      console.log("evenement supprimé");
      this.chargerEvenement();
    })
  }
  chargerEvenement() {
    this.evenementService.listEvenemnts().subscribe(event =>{
      this.evenements = event
    }
      
    )
  }
onChange(){ 
  this.evenementService.rechercherParType(String(this.idType)).subscribe(event => {
    this.evenements = event;
  })
}
ngOnInit(): void {
  this.evenementService.listTypes().subscribe(ty => {
    this.types = ty._embedded.types;
  })  
  
}
}
