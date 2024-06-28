import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedGamesComponent } from '../recommended-games/recommended-games.component';
import { PlayersAlsoPlayedComponent } from '../players-also-played/players-also-played.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Import CommonModule for common directives like ngIf, ngFor, etc.
    RecommendedGamesComponent, // Import the RecommendedGamesComponent
    PlayersAlsoPlayedComponent // Import the PlayersAlsoPlayedComponent
  ]
})
export class MainPageComponent {}
