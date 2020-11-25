import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { collectionData, doc } from 'rxfire/firestore';



@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor(public auth: AngularFireAuth, private db: AngularFirestore){}
  login() {
    return this.auth.signInWithPopup( new (firebase.auth as any).GoogleAuthProvider());
  }
  logout() {
    return this.auth.signOut();
  }
  getDocumentSnapShots(collectionName:string, documentId: string){
    const collectionPath= collectionName + '/' + documentId ; 
     
    return this.db.doc<any>(collectionPath).valueChanges();   
  }


}