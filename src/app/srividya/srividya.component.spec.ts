import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrividyaComponent } from './srividya.component';

describe('SrividyaComponent', () => {
  let component: SrividyaComponent;
  let fixture: ComponentFixture<SrividyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrividyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrividyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
