import { Component } from '@angular/core';

@Component({
  selector: 'app-type-client',
  templateUrl: './type-client.component.html',
  styleUrls: ['./type-client.component.css']
})
export class TypeClientComponent {
 //type de client
 options = ['All','visiteur', 'abonné'];
 selectedOption='All';
}
