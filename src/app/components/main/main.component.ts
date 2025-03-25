import { Component, inject } from '@angular/core';
import { PlayersComponent } from "../players/players.component";
import { DetailComponent  } from '../detail/detail.component';
import { Jugador } from '../../jugador';
import { JugadoresService } from '../../jugadores.service';
import { NgIf } from '@angular/common';
import { playerClickService } from '../../playerClick.service';

@Component({
  selector: 'app-main',
  imports: [PlayersComponent, DetailComponent, NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  jugador?: Jugador;
  jugadores: Jugador[] = [];
  filterType?: string;
  filterValue?: string;

  jugadorService: JugadoresService = inject(JugadoresService);
  playerClickService: playerClickService = inject(playerClickService);

  constructor() {
    this.jugadores = this.jugadorService.getAllJugadores();
  }

  ngOnInit() {
    this.playerClickService.jugador$.subscribe((jugador?: Jugador) => {
      this.jugador = jugador;
    });
  }

  filtrarJugadores(value: string, type: string) {
    this.filterType = type;
    this.filterValue = value;
  }
}

