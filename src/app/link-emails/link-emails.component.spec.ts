import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkEmailsComponent } from './link-emails.component';

describe('LinkEmailsComponent', () => {
  let component: LinkEmailsComponent;
  let fixture: ComponentFixture<LinkEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkEmailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
