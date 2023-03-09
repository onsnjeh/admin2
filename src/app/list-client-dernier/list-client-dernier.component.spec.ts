import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientDernierComponent } from './list-client-dernier.component';

describe('ListClientDernierComponent', () => {
  let component: ListClientDernierComponent;
  let fixture: ComponentFixture<ListClientDernierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClientDernierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClientDernierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
