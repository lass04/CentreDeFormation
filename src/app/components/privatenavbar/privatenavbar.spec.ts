import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privatenavbar } from './privatenavbar';

describe('Privatenavbar', () => {
  let component: Privatenavbar;
  let fixture: ComponentFixture<Privatenavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privatenavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Privatenavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
