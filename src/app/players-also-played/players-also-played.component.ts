import { Component, OnInit } from '@angular/core';
import { Game } from '../game-card/game-card.component';
import { GameCardComponent } from '../game-card/game-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players-also-played',
  templateUrl: './players-also-played.component.html',
  styleUrls: ['./players-also-played.component.scss'],
  standalone: true,
  imports: [GameCardComponent, CommonModule]
})
export class PlayersAlsoPlayedComponent implements OnInit {
  playersAlsoPlayed: Game[] = [
    { id: 1, title: 'Game 1', description: 'This is a great game.', image: 'assets/images/game1.jpg' },
    { id: 2, title: 'Game 2', description: 'This is an awesome game.', image: 'assets/images/game2.jpg' },
    { id: 3, title: 'Game 3', description: 'This is an awesome game.', image: 'assets/images/game3.jpg' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
