import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendWithUpdatesComponent } from './friend-with-updates.component';

describe('FriendWithUpdatesComponent', () => {
  let component: FriendWithUpdatesComponent;
  let fixture: ComponentFixture<FriendWithUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendWithUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendWithUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
