import { Component, Input } from '@angular/core';
import { client } from '../model/client.model';
import { ClientService } from '../services/client-services/client.service';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent {
//recherche
searchText:any;
//client
item2: client[] = [];

constructor(
  private service2: ClientService,
 
) { }

ngOnInit() {
  
  //client
  this.GetClient();
  
}

GetClient() {
  this.service2.getClients().subscribe((allData) => {
    this.item2 = allData;
    console.log(this.item2);

  });
}
// @Input() item2 : client;
// 		constructor() {
// 				this.item2 = {
// 					id: 0,
// 					nom: '',
// 					nombre_ticket: 0, 
// 					nombre_document:0, 
// 					service: '',
// 					date:  '',
// 					image:'',
						
// 				};
// 		}
// 		ngOnInit(): void {
// 				console.log(this.item2);
// 		}

}
