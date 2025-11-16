import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formationdetail } from './formationdetail';

describe('Formationdetail', () => {
  let component: Formationdetail;
  let fixture: ComponentFixture<Formationdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formationdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formationdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
