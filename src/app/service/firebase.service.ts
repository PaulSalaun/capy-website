import {Injectable} from '@angular/core';
import {Firestore} from '@angular/fire/firestore';
import {Auth, fetchSignInMethodsForEmail, signInWithEmailAndPassword} from '@angular/fire/auth';
import {getAuth,} from 'firebase/auth';
import {from, map, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor(private firestore: Firestore, private auth: Auth) {
    }


    getUserUidByEmail(email: string, password: string): Observable<string | null> {
        return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
            map(userCredential => userCredential.user.uid)
        );
    }
}
