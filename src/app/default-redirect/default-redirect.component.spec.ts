import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRedirectComponent } from './default-redirect.component';

describe('DefaultRedirectComponent', () => {
  let component: DefaultRedirectComponent;
  let fixture: ComponentFixture<DefaultRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
