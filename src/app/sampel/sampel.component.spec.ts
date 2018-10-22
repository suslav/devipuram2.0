import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampelComponent } from './sampel.component';

describe('SampelComponent', () => {
  let component: SampelComponent;
  let fixture: ComponentFixture<SampelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
