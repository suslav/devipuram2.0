import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtvComponent } from './dtv.component';

describe('DtvComponent', () => {
  let component: DtvComponent;
  let fixture: ComponentFixture<DtvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
