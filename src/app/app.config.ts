import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideFirebaseApp(() => initializeApp(
      { projectId: "uoc-frontmobi", 
        appId: "1:892525709028:web:e058d9cf97f4c5205f4ef1", 
        databaseURL: "https://uoc-frontmobi-default-rtdb.firebaseio.com", 
        storageBucket: "uoc-frontmobi.firebasestorage.app", 
        apiKey: "AIzaSyCmUF1A3xyrltE3IAKinWwsWOYDj1j0maY", 
        authDomain: "uoc-frontmobi.firebaseapp.com", 
        messagingSenderId: "892525709028" 
      })), 
        provideFirestore(() => getFirestore()), 
  ]
};
