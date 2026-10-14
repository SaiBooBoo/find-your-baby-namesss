import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayName } from './display-name';

describe('DisplayName', () => {
  let component: DisplayName;
  let fixture: ComponentFixture<DisplayName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayName],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayName);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
