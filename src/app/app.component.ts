import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  firestore: Firestore = inject(Firestore);
  jugadores$: Observable<any[]>;
  title = 'front-mobi-p1';

  constructor(){    
    const jugadoreCollection = collection(this.firestore, 'jugador')
    this.jugadores$ = collectionData(jugadoreCollection);
  }
}
