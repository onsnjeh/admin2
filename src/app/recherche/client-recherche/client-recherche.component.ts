import { Component, Input } from '@angular/core';
import { client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/services/client-services/client.service';

@Component({
  selector: 'app-client-recherche',
  templateUrl: './client-recherche.component.html',
  styleUrls: ['./client-recherche.component.css']
})
export class ClientRechercheComponent {
//recherche 1
nom!: string;
  resultats!: any[];
  service!: string;

  constructor(private rechercheService: ClientService) { }

  rechercher() {
    this.rechercheService.rechercher(this.nom,this.service).subscribe(resultats => {
        this.resultats = resultats;
      });
  }
}
// , this.ville