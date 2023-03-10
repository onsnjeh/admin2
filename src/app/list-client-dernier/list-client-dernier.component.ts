import { Component, Input } from '@angular/core';
import { client } from '../model/client.model';
import { ClientService } from '../services/client-services/client.service';
// interface ticket {
//   id:string
// 	name:string;
// 	type: string;
//   Nombre_de_ticket: string;
//   Nombre_de_document:string;
//   Service:string;
// }

// const COUNTRIES: ticket[] = [
// 	{
// 		id:'1',
//     name: 'Client1',
// 		type: 'visiteur',
//     Nombre_de_ticket:'10',
// 		Nombre_de_document: '5',
//     Service:'service'
// 	},
// 	{
// 		id:'2',
//     name: 'Client2',
// 		type: 'abonnée',
//     Nombre_de_ticket:'10',
// 		Nombre_de_document: '5',
//     Service:'service'
// 	},
// 	{
// 		id:'3',
//     name: 'Client1',
// 		type: 'visiteur',
//     Nombre_de_ticket:'10',
// 		Nombre_de_document: '5',
//     Service:'service'
// 	},
// 	{
// 		id:'4',
//     name: 'Client1',
// 		type: 'abonnee',
//     Nombre_de_ticket:'10',
// 		Nombre_de_document: '5',
//     Service:'service'
// 	},
// ];
@Component({
  selector: 'app-list-client-dernier',
  templateUrl: './list-client-dernier.component.html',
  styleUrls: ['./list-client-dernier.component.css']
})
export class ListClientDernierComponent {
  // countries = COUNTRIES;
		@Input() item2 : client;
		constructor() {
				this.item2 = {
					id: 0,
					nom: '',
					nombre_ticket: 0, 
					nombre_document:0, 
					service: '',
					date:  '',
					image:'',
						
				};
		}
		ngOnInit(): void {
				console.log(this.item2);
		}
		
}
