import { Component, Input, OnInit } from '@angular/core';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { FiltroPlayerPipe } from '../../pipes/filtro-players.pipe';
import { NgFor, NgIf } from '@angular/common';
import { Jugador } from '../../jugador';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    PlayerCardComponent,
    FiltroPlayerPipe,
    NgFor,
    FormsModule // <-- Esto soluciona el error
  ],
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
  @Input() jugadores: Jugador[] = [];

  filtroNombre: string = '';
  filtroPosicion: string = '';
  posicionesDisponibles: string[] = [];

  ngOnInit(): void {
    this.posicionesDisponibles = [
      ...new Set(this.jugadores.map((j) => j.Posicion))
    ].sort();
  }
}
