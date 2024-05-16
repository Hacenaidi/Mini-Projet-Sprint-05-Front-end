import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrl: './evenements.component.css'
})
export class EvenementsComponent implements OnInit {

  evenements! : Evenement[];
  constructor(private evenementService : EvenementService,
    public authService: AuthService) {
  }
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
  ngOnInit(): void {
    this.chargerEvenement();
  }

}