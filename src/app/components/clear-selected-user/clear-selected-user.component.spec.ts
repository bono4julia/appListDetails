import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearSelectedUserComponent } from './clear-selected-user.component';

describe('ClearSelectedUserComponent', () => {
  let component: ClearSelectedUserComponent;
  let fixture: ComponentFixture<ClearSelectedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearSelectedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearSelectedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
