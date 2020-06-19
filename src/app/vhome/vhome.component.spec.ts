import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VhomeComponent } from './vhome.component';

describe('VhomeComponent', () => {
  let component: VhomeComponent;
  let fixture: ComponentFixture<VhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
