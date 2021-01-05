import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGamesComponent } from './view-games.component';

describe('ViewGameComponent', () => {
  let component: ViewGamesComponent;
  let fixture: ComponentFixture<ViewGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
