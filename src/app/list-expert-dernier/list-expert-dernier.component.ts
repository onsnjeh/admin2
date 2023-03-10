import { Component, Input } from '@angular/core';
import { expert } from '../model/expert.model';
// interface ticket {
// 	id: string
// 	name: string;
// 	category: string;
// 	Specialite: string;
// 	Nombre_de_ticket: string;
// 	Nombre_de_document: string;
// }

// const COUNTRIES: ticket[] = [
// 	{
// 		id: '1',
// 		name: 'Expert1',
// 		category: 'juridique',
// 		Specialite: 'loi ',
// 		Nombre_de_ticket: '10',
// 		Nombre_de_document: '5'
// 	},
// 	{
// 		id: '2',
// 		name: 'Expert2',
// 		category: 'social',
// 		Specialite: 'loi ',
// 		Nombre_de_ticket: '10',
// 		Nombre_de_document: '5'

// 	},
// 	{
// 		id: '3',
// 		name: 'Expert1',
// 		category: 'fiscal',
// 		Specialite: 'loi ',
// 		Nombre_de_ticket: '10',
// 		Nombre_de_document: '5'

// 	},
// 	{
// 		id: '4',
// 		name: 'Expert1',
// 		category: 'juridique',
// 		Specialite: 'loi ',
// 		Nombre_de_ticket: '10',
// 		Nombre_de_document: '5'

// 	},
// ];
@Component({
	selector: 'app-list-expert-dernier',
	templateUrl: './list-expert-dernier.component.html',
	styleUrls: ['./list-expert-dernier.component.css']
})
export class ListExpertDernierComponent {
	// countries = COUNTRIES;
	@Input() item3: expert;
	constructor() {
		this.item3 = {
			id: 0,
			nom: '',
			category: '',
			specialite: '',
			nombre_ticket: 0,
			nombre_document: 0,
			image:''

		};
	}
	ngOnInit(): void {
		console.log(this.item3);
	}
}
