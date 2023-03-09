import { Component } from '@angular/core';

@Component({
  selector: 'app-nom-manager',
  templateUrl: './nom-manager.component.html',
  styleUrls: ['./nom-manager.component.css']
})
export class NomManagerComponent {
 //category
 options = ['All','Manager1', 'Manager2', 'Manager3'];
 selectedOption='All';
}
