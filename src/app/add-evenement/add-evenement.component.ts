import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { log } from 'console';
import { EvenementService } from '../services/evenement.service';
import { Type } from '../model/type.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrl: './add-evenement.component.css'
})
export class AddEvenementComponent  implements OnInit{
  newEvenement = new Evenement();
  types! : Type[];
  newIdType! : number;
  newType! : Type;

constructor(private evenementService : EvenementService,private router : Router){}
  addEvenement(): void {
    this.newEvenement.type = this.types.find(ty => ty.idType == this.newIdType)!;
   this.evenementService.ajoutEvenement(this.newEvenement).subscribe(event => {
    console.log(event);
    this.router.navigate(['evenements']);
   })

  }
  ngOnInit(): void {
this.evenementService.listTypes().
subscribe(ty => {
  this.types = ty._embedded.types;
 
})
console.log(this.types);
  }

}
