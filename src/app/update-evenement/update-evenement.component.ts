import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../model/type.model';


@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styles: ``
})
export class UpdateEvenementComponent implements OnInit{
  types! : Type[];
  currentEvenement = new Evenement();
  updatetypeId! :number;

  constructor( private evenementService : EvenementService,
    private activateRoute : ActivatedRoute,private router : Router
  ){  }

  updateEvenement(){
    this.currentEvenement.type = this.types.find(ty => ty.idType == this.updatetypeId)!;
    this.evenementService.updateEvenement(this.currentEvenement).subscribe(evenement => {
      this.router.navigate(['evenements']);
    })
  }

  ngOnInit(): void {
    this.evenementService.listTypes().subscribe(ty => {
      this.types = ty._embedded.types;
    })
    this.evenementService.consulterEvenement(this.activateRoute.snapshot.params['id']).subscribe(evenement => {
      this.currentEvenement = evenement;
      this.updatetypeId =  this.currentEvenement.type.idType 
    })
  }
}
