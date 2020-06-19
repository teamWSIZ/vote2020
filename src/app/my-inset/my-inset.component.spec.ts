import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInsetComponent } from './my-inset.component';

describe('MyInsetComponent', () => {
  let component: MyInsetComponent;
  let fixture: ComponentFixture<MyInsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
