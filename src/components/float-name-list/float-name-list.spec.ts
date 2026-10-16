import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloatNameList } from './float-name-list';

describe('FloatNameList', () => {
  let component: FloatNameList;
  let fixture: ComponentFixture<FloatNameList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatNameList],
    }).compileComponents();

    fixture = TestBed.createComponent(FloatNameList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
