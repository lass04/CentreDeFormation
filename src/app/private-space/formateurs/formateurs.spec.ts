import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formateurs } from './formateurs';

describe('Formateurs', () => {
  let component: Formateurs;
  let fixture: ComponentFixture<Formateurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formateurs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formateurs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
