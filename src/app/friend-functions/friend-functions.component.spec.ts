import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendFunctionsComponent } from './friend-functions.component';

describe('FriendFunctionsComponent', () => {
  let component: FriendFunctionsComponent;
  let fixture: ComponentFixture<FriendFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
