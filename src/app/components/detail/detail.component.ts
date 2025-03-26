import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from '../../jugador';
import { playerClickService } from '../../playerClick.service';
import { NgIf } from '@angular/common';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-detail',
  imports: [NgIf, MediaComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() jugador!: Jugador;
  route: ActivatedRoute = inject(ActivatedRoute);

  playerClickService: playerClickService = inject(playerClickService);

  constructor() {
  }

  clearPlayer(){
    this.playerClickService.playerHidden();
  }
}
