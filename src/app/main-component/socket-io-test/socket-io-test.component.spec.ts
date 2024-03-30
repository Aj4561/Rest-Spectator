import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketIoTestComponent } from './socket-io-test.component';

describe('SocketIoTestComponent', () => {
  let component: SocketIoTestComponent;
  let fixture: ComponentFixture<SocketIoTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocketIoTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketIoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
