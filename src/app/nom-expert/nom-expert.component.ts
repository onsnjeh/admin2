import { Component } from '@angular/core';
import { ExpertService } from '../services/expert-services/expert.service';

@Component({
  selector: 'app-nom-expert',
  templateUrl: './nom-expert.component.html',
  styleUrls: ['./nom-expert.component.css']
})
export class NomExpertComponent {
//nom d'expert
// options = ['All','Expert1', 'Expert2', 'Expert3'];
// selectedOption='All';
NomExpert :any;
constructor(private nom: ExpertService) {
    // this.item1 = {
    //   id: 0,
    //   category: '',
     
        
    // };
}
ngOnInit(): void {
    // console.log(this.item1);
    this.nom.getExperts().subscribe((allData:any) => {
      this.NomExpert = allData;
      })
}
// changeList(e){
//   console.log(e.target.valeur)
// }
}
