import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadraoComponent } from './ladrao.component';

describe('LadraoComponent', () => {
  let component: LadraoComponent;
  let fixture: ComponentFixture<LadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
