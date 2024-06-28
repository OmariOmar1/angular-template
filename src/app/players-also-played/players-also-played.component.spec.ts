import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersAlsoPlayedComponent } from './players-also-played.component';

describe('PlayersAlsoPlayedComponent', () => {
  let component: PlayersAlsoPlayedComponent;
  let fixture: ComponentFixture<PlayersAlsoPlayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersAlsoPlayedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayersAlsoPlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
