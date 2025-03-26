import { Component, inject, Input } from '@angular/core';
import { PlayersComponent } from "../players/players.component";
import { DetailComponent  } from '../detail/detail.component';
import { Jugador } from '../../jugador';
import { NgIf } from '@angular/common';
import { playerClickService } from '../../playerClick.service';
import { JugadorService } from '../../jugador.service';

@Component({
  selector: 'app-main',
  imports: [PlayersComponent, DetailComponent, NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  @Input() jugadores!: Jugador[];
  jugador?: Jugador;
  filterType: string = '';
  filterValue: string = '';

  playerClickService: playerClickService = inject(playerClickService);
  jugadoresService: JugadorService = inject(JugadorService);

  constructor(){
    this.jugadores = [];
  }

  async ngOnInit() {
    this.jugadores = this.jugadoresService.getJugadores();
    this.playerClickService.jugador$.subscribe((jugador?: Jugador) => {
      this.jugador = jugador;
    });
  }

  filtrarJugadores(value: string, type: string) {
    this.filterType = type;
    this.filterValue = value;
  }
}

