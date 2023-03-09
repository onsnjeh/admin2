import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManagerDernierComponent } from './list-manager-dernier.component';

describe('ListManagerDernierComponent', () => {
  let component: ListManagerDernierComponent;
  let fixture: ComponentFixture<ListManagerDernierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListManagerDernierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListManagerDernierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
