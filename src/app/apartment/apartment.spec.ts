import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApartmentComponent } from './apartment';

describe('ApartmentComponent', () => {
  let component: ApartmentComponent;
  let fixture: ComponentFixture<ApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApartmentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
