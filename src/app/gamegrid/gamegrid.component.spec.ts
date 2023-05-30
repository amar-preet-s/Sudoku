import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamegridComponent } from './gamegrid.component';

describe('GamegridComponent', () => {
  let component: GamegridComponent;
  let fixture: ComponentFixture<GamegridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamegridComponent]
    });
    fixture = TestBed.createComponent(GamegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
