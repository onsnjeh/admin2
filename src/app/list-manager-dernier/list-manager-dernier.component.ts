import { Component } from '@angular/core';
interface ticket {
	id: string
	name: string;
	category: string;
	Specialite: string;
	Nombre_de_ticket_repondre: string;
	Nombre_de_document: string;
}

const COUNTRIES: ticket[] = [
	{
		id: '1',
		name: 'Manager1',
		category: 'juridique',
		Specialite: 'loi ',
		Nombre_de_ticket_repondre: '10',
		Nombre_de_document: '5'
	},
	{
		id: '2',
		name: 'Manager2',
		category: 'social',
		Specialite: 'loi ',
		Nombre_de_ticket_repondre: '10',
		Nombre_de_document: '5'
		
	},
	{
		id: '3',
		name: 'Manager1',
		category: 'fiscal',
		Specialite: 'loi ',
		Nombre_de_ticket_repondre: '10',
		Nombre_de_document: '5'
		
	},
	{
		id: '4',
		name: 'Manager1',
		category: 'juridique',
		Specialite: 'loi ',
		Nombre_de_ticket_repondre: '10',
		Nombre_de_document: '5'
		
	},
];
@Component({
	selector: 'app-list-manager-dernier',
	templateUrl: './list-manager-dernier.component.html',
	styleUrls: ['./list-manager-dernier.component.css']
})
export class ListManagerDernierComponent {
	countries = COUNTRIES;

}
