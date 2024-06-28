import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../game-card/game-card.component'; // Ensure the path and import are correct
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-recommended-games',
  templateUrl: './recommended-games.component.html',
  styleUrls: ['./recommended-games.component.scss'],
  standalone: true,
  imports: [CommonModule, GameCardComponent] // Import CommonModule here
})
export class RecommendedGamesComponent implements OnInit {
  public recommendedGames: Game[] = [
    { id: 1, title: 'Game 1', description: 'This is a great game.', image: 'assets/images/game1.jpg' },
    { id: 2, title: 'Game 2', description: 'This is an awesome game.', image: 'assets/images/game2.jpg' },
    { id: 3, title: 'Game 3', description: 'This is an awesome game.', image: 'assets/images/game3.jpg' }
  ];

  constructor() {}

  ngOnInit(): void { }
}
