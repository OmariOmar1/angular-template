import { Component, Input } from '@angular/core'; // Make sure 'Input' is included here

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  standalone: true
})
export class GameCardComponent {
  @Input() game!: Game; // This is where 'Input' is used
}

export interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
}
