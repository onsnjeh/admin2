import { Component, Input } from '@angular/core';
import { document } from '../model/document.model';
// interface ticket {
//   Numero:string
// 	nameArticle:string;
// 	category: string;
//   theme: string;
//   expert:string;
//   date:string;
// }

// const COUNTRIES: ticket[] = [
// 	{
// 		Numero:'1',
//     nameArticle: 'Article1',
// 		category: 'juridique',
//     theme:'loi',
// 		expert: 'nom  expert 1',
//     date:'12/11/2023'
// 	},
// 	{
// 		Numero:'2',
//     nameArticle: 'Article2',
// 		category: 'fiscal',
//     theme:'loi',
// 		expert: 'nom  expert 1',
//     date:'12/11/2023'
// 	},
// 	{
// 		Numero:'3',
//     nameArticle: 'Article3',
// 		category: 'social',
//     theme:'loi',
// 		expert: 'nom  expert 1',
//     date:'12/11/2023'
// 	},
// 	{
// 		Numero:'4',
//     nameArticle: 'Article4',
// 		category: 'juridique',
//     theme:'loi',
// 		expert: 'nom  expert 1',
//     date:'12/11/2023'
// 	},
// ];
@Component({
	selector: 'app-list-article-dernier',
	templateUrl: './list-article-dernier.component.html',
	styleUrls: ['./list-article-dernier.component.css']
})
export class ListArticleDernierComponent {
	// countries = COUNTRIES;
	@Input() item1: document;
	constructor() {
		this.item1 = {
			id: 0,
			nom: '',
			category: '',
			type: '',
			theme: '',
			consultant: '',
			date: '',

		};
	}
	ngOnInit(): void {
		console.log(this.item1);
	}
}
