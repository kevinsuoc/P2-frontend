import { Component, Input, inject } from '@angular/core';
import { playerClickService } from '../../playerClick.service';
import { Jugador } from '../../jugador';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-player-card',
  imports: [NgClass],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent {
  @Input() jugador!: Jugador;
  selected: boolean = false;

  playerClickService: playerClickService = inject(playerClickService);

    ngOnInit() {
      this.playerClickService.jugador$.subscribe((jugadorSelected?: Jugador) => {
        if (this.jugador.id === jugadorSelected?.id){
          this.selected = true;
        } else {
          this.selected = false;
        }
      });
    }
  
  selectPlayer(event: Event){
    event.preventDefault();
    if (this.selected)
      this.playerClickService.playerHidden();
    else {
      this.playerClickService.playerClicked(this.jugador);
      window.scrollTo({ top: 70, behavior: 'smooth' })
    }
  }
}

