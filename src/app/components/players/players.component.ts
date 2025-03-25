import { Component, Input } from '@angular/core';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { FiltroPlayerPipe } from '../../pipes/filtro-players.pipe';
import { NgFor, NgIf } from '@angular/common';
import { Jugador } from '../../jugador';

@Component({
  selector: 'app-players',
  imports: [PlayerCardComponent, FiltroPlayerPipe, NgFor, NgIf],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  @Input() jugadores?: Jugador[];
  @Input() filterType?: string;
  @Input() filterValue?: string;
}
