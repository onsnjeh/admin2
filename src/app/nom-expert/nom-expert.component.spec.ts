import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomExpertComponent } from './nom-expert.component';

describe('NomExpertComponent', () => {
  let component: NomExpertComponent;
  let fixture: ComponentFixture<NomExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomExpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
