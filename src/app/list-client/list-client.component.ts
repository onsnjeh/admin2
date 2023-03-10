import { Component } from '@angular/core';
import { client } from '../model/client.model';
import { ClientService } from '../services/client-services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent {
  searchText: any;

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
 
 
}
