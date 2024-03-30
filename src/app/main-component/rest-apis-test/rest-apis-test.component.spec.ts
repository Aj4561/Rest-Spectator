import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApisTestComponent } from './rest-apis-test.component';

describe('RestApisTestComponent', () => {
  let component: RestApisTestComponent;
  let fixture: ComponentFixture<RestApisTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestApisTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApisTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
