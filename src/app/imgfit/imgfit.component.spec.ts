import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgfitComponent } from './imgfit.component';

describe('ImgfitComponent', () => {
  let component: ImgfitComponent;
  let fixture: ComponentFixture<ImgfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
