import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from "@angular/fire/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA2o8gv3pw2gV1fqWNB_Nb2MbxegAAeMs",
  authDomain: "kapy-38ecd.firebaseapp.com",
  projectId: "kapy-38ecd",

  storageBucket: 'kapy-38ecd.appspot.com',
  appId: '1:481737200106:android:ef715bbe2fa8126195a293'
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
};
