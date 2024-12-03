import {Injectable} from '@angular/core';
import {deleteDoc, doc, Firestore} from '@angular/fire/firestore';
import {Auth, fetchSignInMethodsForEmail, signInWithEmailAndPassword} from '@angular/fire/auth';
import {getAuth,} from 'firebase/auth';
import {from, map, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor(private firestore: Firestore, private auth: Auth) {
    }


  /**
   * Deletes a user document from the "users" collection
   * @param uid The unique identifier of the user document to delete
   * @returns A promise that resolves when the document is deleted
   */
  async deleteUserDocument(uid: string): Promise<void> {
    try {
      const userDocRef = doc(this.firestore, 'users', uid);
      await deleteDoc(userDocRef);
      console.log(`User document with UID ${uid} deleted successfully`);
    } catch (error) {
      console.error('Error deleting user document:', error);
      throw error;
    }
  }

  /**
   * Deletes the user account from Firebase Authentication
   * @param uid The unique identifier of the user account to delete
   * @returns A promise that resolves when the account is deleted
   */
  async deleteUserAccount(uid: string): Promise<void> {
    try {
      if (!this.auth.currentUser || this.auth.currentUser.uid !== uid) {
        throw new Error('Unauthorized to delete this account');
      }

      await this.auth.currentUser.delete();
      console.log(`User account with UID ${uid} deleted successfully`);
    } catch (error) {
      console.error('Error deleting user account:', error);
      throw error;
    }
  }
}
