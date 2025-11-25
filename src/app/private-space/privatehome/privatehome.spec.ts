import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privatehome } from './privatehome';

describe('Privatehome', () => {
  let component: Privatehome;
  let fixture: ComponentFixture<Privatehome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privatehome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Privatehome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
