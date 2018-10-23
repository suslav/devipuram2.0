import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutgurujiComponent } from './aboutguruji.component';

describe('AboutgurujiComponent', () => {
  let component: AboutgurujiComponent;
  let fixture: ComponentFixture<AboutgurujiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutgurujiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutgurujiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
