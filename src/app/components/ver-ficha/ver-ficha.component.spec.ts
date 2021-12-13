import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFichaComponent } from './ver-ficha.component';

describe('VerFichaComponent', () => {
  let component: VerFichaComponent;
  let fixture: ComponentFixture<VerFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerFichaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
