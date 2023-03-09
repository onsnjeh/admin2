import { Component } from '@angular/core';

@Component({
  selector: 'app-nom-expert',
  templateUrl: './nom-expert.component.html',
  styleUrls: ['./nom-expert.component.css']
})
export class NomExpertComponent {
//nom d'expert
options = ['All','Expert1', 'Expert2', 'Expert3'];
selectedOption='All';
}
