import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRedirectComponent } from './header-redirect.component';

describe('HeaderRedirectComponent', () => {
  let component: HeaderRedirectComponent;
  let fixture: ComponentFixture<HeaderRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
