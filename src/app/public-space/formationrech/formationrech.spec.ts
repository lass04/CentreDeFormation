import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formationrech } from './formationrech';

describe('Formationrech', () => {
  let component: Formationrech;
  let fixture: ComponentFixture<Formationrech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formationrech]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formationrech);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
