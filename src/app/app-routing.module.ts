import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementsComponent } from './evenements/evenements.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { evenementGuard } from './evenement.guard';

const routes: Routes = [
  {path: "evenements", component : EvenementsComponent},
  {path: "listTypes", component : ListeTypesComponent},
  {path: "add-evenement", component : AddEvenementComponent , canActivate:[evenementGuard]},
  {path: "updateEvenement/:id", component : UpdateEvenementComponent},
  {path: "rechercheParType", component : RechercheParTypeComponent},
  {path: "rechercheParNom", component : RechercherParNomComponent},
  {path: "login",component : LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},

  { path: "", redirectTo: "evenements", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [evenementGuard]
})
export class AppRoutingModule { }
