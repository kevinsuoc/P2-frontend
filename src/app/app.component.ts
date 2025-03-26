import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Firestore, collection, doc, getDocs, onSnapshot } from '@angular/fire/firestore';
import { Jugador, jugadorConverter } from './jugador';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'front-mobi-p1';
}
