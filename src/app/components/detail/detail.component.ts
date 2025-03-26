import { Component, Input, inject } from '@angular/core';
import { Jugador } from '../../jugador';
import { playerClickService } from '../../playerClick.service';
import { NgIf } from '@angular/common';
import { MediaComponent } from '../media/media.component';
import { SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JugadorService } from '../../jugador.service';

@Component({
  selector: 'app-detail',
  imports: [NgIf, MediaComponent, ReactiveFormsModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() jugador!: Jugador;
  edit: boolean;
  nombreControl = new FormControl('');
  dorsalControl = new FormControl(0);
  posicionControl = new FormControl('');
  nacionalidadControl = new FormControl('');
  alturaControl = new FormControl('');
  descripcionControl = new FormControl('');
  edadControl = new FormControl(0);

  jugadorService: JugadorService = inject(JugadorService);
  playerClickService: playerClickService = inject(playerClickService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['jugador']) {
      this.edit = false;
    }
  }

  clearPlayer(){
    this.playerClickService.playerHidden();
  }

  editPlayer(){
    this.edit = true;
    this.nombreControl.setValue(this.jugador.Nombre);
    this.dorsalControl.setValue(this.jugador.Dorsal);
    this.posicionControl.setValue(this.jugador.Posicion);
    this.nacionalidadControl.setValue(this.jugador.Nacionalidad);
    this.alturaControl.setValue(this.jugador.Altura);
    this.descripcionControl.setValue(this.jugador.Descripcion);
    this.edadControl.setValue(this.jugador.Edad);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  cancelEdit(){
    this.edit = false;
  }

  acceptEdit(){
    this.edit = false;
    this.jugador.Nombre = this.nombreControl.getRawValue()!;
    this.jugador.Dorsal = this.dorsalControl.getRawValue()!;
    this.jugador.Posicion = this.posicionControl.getRawValue()!;
    this.jugador.Nacionalidad = this.nacionalidadControl.getRawValue()!;
    this.jugador.Altura = this.alturaControl.getRawValue()!;
    this.jugador.Descripcion = this.descripcionControl.getRawValue()!;
    this.jugador.Edad = this.edadControl.getRawValue()!;
    this.jugadorService.updateJugador(this.jugador);
  }

  constructor() {
    this.edit = false;
  }
}
