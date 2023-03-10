import { Component, Input } from '@angular/core';
import { SpecialiteService } from '../services/specialite-services/specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent {
//spécialité
// options = ['All','loi', 'droit', 'tva'];
// selectedOption='All';
specialite :any;
constructor(private Specialite: SpecialiteService) {
    // this.item1 = {
    //   id: 0,
    //   category: '',
     
        
    // };
}
ngOnInit(): void {
    // console.log(this.item1);
    this.Specialite.getSpecialites().subscribe((allData:any) => {
      this.specialite = allData;
      })
}
// changeList(e){
//   console.log(e.target.valeur)
// }
}
