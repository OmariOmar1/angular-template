import { Component, OnInit } from '@angular/core';
import { Game } from '../game-card/game-card.component';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-players-also-played',
  templateUrl: './players-also-played.component.html',
  styleUrls: ['./players-also-played.component.scss'],
  standalone: true,
  imports: [GameCardComponent]
})
export class PlayersAlsoPlayedComponent implements OnInit {
  playersAlsoPlayed: Game[] = [
    { id: 3, title: 'Game A', description: 'Check out this game!', image: 'assets/images/gameA.jpg' },
    { id: 4, title: 'Game B', description: 'Don\'t miss this game.', image: 'assets/images/gameB.jpg' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
