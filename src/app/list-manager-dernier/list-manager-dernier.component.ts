import { Component, Input } from '@angular/core';
import { manager } from '../model/manager.model';
// interface ticket {
// 	id: string
// 	name: string;
// 	category: string;
// 	Specialite: string;
// 	Nombre_de_ticket_repondre: string;
// 	Nombre_de_document: string;
// }

// const COUNTRIES: ticket[] = [
// {
// 	id: '1',
// 	name: 'Manager1',
// 	category: 'juridique',
// 	Specialite: 'loi ',
// 	Nombre_de_ticket_repondre: '10',
// 	Nombre_de_document: '5'
// },
// {
// 	id: '2',
// 	name: 'Manager2',
// 	category: 'social',
// 	Specialite: 'loi ',
// 	Nombre_de_ticket_repondre: '10',
// 	Nombre_de_document: '5'

// },
// {
// 	id: '3',
// 	name: 'Manager1',
// 	category: 'fiscal',
// 	Specialite: 'loi ',
// 	Nombre_de_ticket_repondre: '10',
// 	Nombre_de_document: '5'

// },
// {
// 	id: '4',
// 	name: 'Manager1',
// 	category: 'juridique',
// 	Specialite: 'loi ',
// 	Nombre_de_ticket_repondre: '10',
// 	Nombre_de_document: '5'

// },
// ];
@Component({
	selector: 'app-list-manager-dernier',
	templateUrl: './list-manager-dernier.component.html',
	styleUrls: ['./list-manager-dernier.component.css']
})
export class ListManagerDernierComponent {
	// countries = COUNTRIES;
	@Input() item4: manager;
	constructor() {
		this.item4 = {
			id: 0,
			nom: '',
			category: '',
			specialite: '',
			nombre_ticket: 0,
			nombre_document: 0,
			image:'',


		};
	}
	ngOnInit(): void {
		console.log(this.item4);
	}
}
