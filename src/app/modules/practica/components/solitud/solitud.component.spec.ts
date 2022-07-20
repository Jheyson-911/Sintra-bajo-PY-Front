import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolitudComponent } from './solitud.component';

describe('SolitudComponent', () => {
  let component: SolitudComponent;
  let fixture: ComponentFixture<SolitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
