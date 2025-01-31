import { Component, OnInit, } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { Type } from '../model/type.model';
import { EvenementService } from '../services/evenement.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-rechercher-par-nom',
  templateUrl: './rechercher-par-nom.component.html',
  styles: ``
})
export class RechercherParNomComponent implements OnInit {
  evenements! : Evenement[];
  types! : Type[];
  searcheTrem! : string;
  nomEvenement! : string;
  allevenements! : Evenement[];
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
  rechercherEvent() {
    this.evenementService.rechercherParNom(this.nomEvenement).subscribe(event => {
      this.evenements = event;
    })
  }
  onkeyup(nom: string) {
    console.log("hh");
    this.evenements = this.allevenements.filter(ev => ev.nomEvenement.toLowerCase().includes(nom))
    
  }
  ngOnInit(): void {
this.evenementService.listEvenemnts().subscribe(event => {
  this.evenements = event
})
    
  }
}
