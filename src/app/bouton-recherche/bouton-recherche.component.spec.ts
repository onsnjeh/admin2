import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonRechercheComponent } from './bouton-recherche.component';

describe('BoutonRechercheComponent', () => {
  let component: BoutonRechercheComponent;
  let fixture: ComponentFixture<BoutonRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonRechercheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
