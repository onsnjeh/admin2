import { Component } from '@angular/core';
import { client } from '../model/client.model';
import { document } from '../model/document.model';
import { expert } from '../model/expert.model';
import { manager } from '../model/manager.model';
import { ticket } from '../model/ticket.model';
import { ClientService } from '../services/client-services/client.service';
import { DocumentService } from '../services/document-services/document.service';
import { ExpertService } from '../services/expert-services/expert.service';
import { ManagerService } from '../services/manager-services/manager.service';
import { TicketService } from '../services/ticket-services/ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  active = 'list-article-dernier';
  //document
  item1: document[] = [];
  //client
  item2: client[] = [];
  //expert
  item3: expert[] = [];
  //manager
  item4: manager[] = [];
  //ticket
  item5: ticket[] = [];
  constructor(
    private service1: DocumentService,
    private service2: ClientService,
    private service3: ExpertService,
    private service4: ManagerService,
    private service5: TicketService
  ) { }

  ngOnInit() {
    //document
    this.GetDocument();
    //client
    this.GetClient();
    //expert
    this.GetExpert();
    //manager
    this.GetManager();
    //ticket
    this.GetTicket();
  }
  GetDocument() {
    this.service1.getDocument().subscribe((allData) => {
      this.item1 = allData;
      console.log(this.item1);

    });
  }
  GetClient() {
    this.service2.getClients().subscribe((allData) => {
      this.item2 = allData;
      console.log(this.item2);

    });
  }
  GetExpert() {
    this.service3.getExperts().subscribe((allData) => {
      this.item3 = allData;
      console.log(this.item3);

    });
  }
  GetManager() {
    this.service4.getManagers().subscribe((allData) => {
      this.item4 = allData;
      console.log(this.item4);

    });
  }
  GetTicket() {
    this.service5.getTickets().subscribe((allData) => {
      this.item5 = allData;
      console.log(this.item5);

    });
  }

}
