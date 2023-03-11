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

}