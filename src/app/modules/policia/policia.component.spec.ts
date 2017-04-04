import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciaComponent } from './policia.component';

describe('PoliciaComponent', () => {
  let component: PoliciaComponent;
  let fixture: ComponentFixture<PoliciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
