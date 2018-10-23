import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdevipuramComponent } from './aboutdevipuram.component';

describe('AboutdevipuramComponent', () => {
  let component: AboutdevipuramComponent;
  let fixture: ComponentFixture<AboutdevipuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutdevipuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutdevipuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
